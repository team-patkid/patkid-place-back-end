import { NestFactory } from '@nestjs/core';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';
import { ConfigService } from './config/config.service';
import { setupSwagger } from './global/swagger';
import { Logger } from './log/logger';
import { MainModule } from './main.module';

import { ValidationPipe } from '@nestjs/common';
import * as Sentry from '@sentry/node';
import rTracer from 'cls-rtracer';
import { version } from '../package.json';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    MainModule,
    new ExpressAdapter(),
    { cors: true },
  );

  setupSwagger(app);

  app.enableCors();
  app.use(helmet({ contentSecurityPolicy: false }));
  app.use(rTracer.expressMiddleware());
  app.enableShutdownHooks();

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      validationError: { target: false, value: false },
    }),
  );

  Sentry.init({
    dsn: ConfigService.getConfig().SENTRY_DSN,
    enabled: true,
    release: version,
    environment: ConfigService.getConfig().ENV,
    attachStacktrace: true,
  });

  Logger.info({
    message: `App started on env ${ConfigService.getConfig().ENV}, port ${ConfigService.getConfig().PORT}`,
  }, 'App');

  await app.listen(3000);
}

bootstrap();
