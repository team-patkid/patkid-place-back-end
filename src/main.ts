import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { setupSwagger } from './global/swagger';
import helmet from 'helmet';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);

  setupSwagger(app);

  app.enableCors();
  app.use(helmet({ contentSecurityPolicy: false }));

  console.log(`App started on env ${ConfigService.getConfig().ENV}, port ${ConfigService.getConfig().PORT}`);

  await app.listen(3000);
}

bootstrap();
