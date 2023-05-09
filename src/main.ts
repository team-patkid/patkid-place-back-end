import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { setupSwagger } from './global/swagger';
import helmet from 'helmet';



async function bootstrap() {
  const app = await NestFactory.create(MainModule);

  setupSwagger(app);

  app.enableCors();
  app.use(helmet({ contentSecurityPolicy: false }));

  await app.listen(3000);
}

bootstrap();
