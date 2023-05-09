import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { setupSwagger } from './global/swagger';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);

  setupSwagger(app);

  await app.listen(3000);
}

bootstrap();
