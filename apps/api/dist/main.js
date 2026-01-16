"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const path = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter());
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
    }));
    app.useStaticAssets(path.join(process.cwd(), 'uploads'), {
        prefix: '/uploads/',
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('NO PONTO – API Clientes')
        .setDescription('API SaaS multiempresa')
        .setVersion('1.0.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.enableCors();
    await app.listen(4000, '0.0.0.0');
    console.log(`Application is running on: ${await app.getUrl()}`);
    console.log(`Swagger is running on: ${await app.getUrl()}/api`);
}
bootstrap();
//# sourceMappingURL=main.js.map