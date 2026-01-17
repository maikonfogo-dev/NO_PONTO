import { NestFactory } from '@nestjs/core';
import { NestExpressApplication, ExpressAdapter } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import * as path from 'path';
import * as fs from 'fs';

function toYaml(value: any, indent = 0): string {
  const indentStr = '  '.repeat(indent);

  if (value === null) {
    return 'null';
  }

  const type = typeof value;

  if (type === 'string' || type === 'number' || type === 'boolean') {
    return JSON.stringify(value);
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return '[]';
    }

    return value
      .map((item) => {
        const itemYaml = toYaml(item, indent + 1);

        if (item && typeof item === 'object' && !Array.isArray(item)) {
          const lines = itemYaml.split('\n');
          const firstLine = `${indentStr}- ${lines[0]}`;
          const restLines = lines
            .slice(1)
            .map((line) => `${indentStr}  ${line}`)
            .join('\n');

          return restLines ? `${firstLine}\n${restLines}` : firstLine;
        }

        return `${indentStr}- ${itemYaml}`;
      })
      .join('\n');
  }

  if (type === 'object') {
    const entries = Object.entries(value as Record<string, any>);

    if (entries.length === 0) {
      return '{}';
    }

    return entries
      .map(([key, val]) => {
        const keyYaml = JSON.stringify(key);
        const valYaml = toYaml(val, indent + 1);

        if (val && typeof val === 'object' && !Array.isArray(val)) {
          const lines = valYaml.split('\n');
          const mapped = lines.map((line) => `${indentStr}  ${line}`).join('\n');
          return `${indentStr}${keyYaml}:\n${mapped}`;
        }

        return `${indentStr}${keyYaml}: ${valYaml}`;
      })
      .join('\n');
  }

  return JSON.stringify(value);
}

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
  
  const config = new DocumentBuilder()
    .setTitle('NO PONTO – API Clientes')
    .setDescription('API SaaS multiempresa')
    .setVersion('1.0.0')
    .addBearerAuth()
    .addServer('https://api.noponto.com/v1')
    .addServer('http://localhost:4000')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const yamlOutputPath = path.join(process.cwd(), 'swagger.yaml');
  const yamlContent = toYaml(document);
  fs.writeFileSync(yamlOutputPath, yamlContent);

  // Enable CORS
  app.enableCors();
  await app.listen(4000, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(`Swagger is running on: ${await app.getUrl()}/api`);
}
bootstrap();
