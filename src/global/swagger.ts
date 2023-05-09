import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('PatKid Place API 문서')
    .setDescription('PatKid Place API 설명')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
    
  SwaggerModule.setup('api', app, document);
}