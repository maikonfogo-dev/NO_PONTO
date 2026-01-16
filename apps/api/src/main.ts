import { NestFactory } from '@nestjs/core';
import { NestExpressApplication, ExpressAdapter } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, new ExpressAdapter());

  // Global Validation Pipe
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
    forbidNonWhitelisted: true,
  }));

  // Serve Static Assets (Uploads)
  app.useStaticAssets(path.join(process.cwd(), 'uploads'), {
    prefix: '/uploads/',
  });
  
  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('NO PONTO – API Clientes')
    .setDescription('API SaaS multiempresa')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Enable CORS
  app.enableCors();
  await app.listen(4000, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(`Swagger is running on: ${await app.getUrl()}/api`);
}
bootstrap();
