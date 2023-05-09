import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { ConfigService } from './config/config.service';
import { setupSwagger } from './global/swagger';
import { Logger } from './log/logger';
import { MainModule } from './main.module';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';

import rTracer from 'cls-rtracer';

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

  Logger.info({
    message: `App started on env ${ConfigService.getConfig().ENV}, port ${ConfigService.getConfig().PORT}`,
  }, 'App');

  await app.listen(3000);
}

bootstrap();
