"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const path = require("path");
const fs = require("fs");
function toYaml(value, indent = 0) {
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
        const entries = Object.entries(value);
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
        .addServer('https://api.noponto.com/v1')
        .addServer('http://localhost:4000')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    const yamlOutputPath = path.join(process.cwd(), 'swagger.yaml');
    const yamlContent = toYaml(document);
    fs.writeFileSync(yamlOutputPath, yamlContent);
    app.enableCors();
    await app.listen(4000, '0.0.0.0');
    console.log(`Application is running on: ${await app.getUrl()}`);
    console.log(`Swagger is running on: ${await app.getUrl()}/api`);
}
bootstrap();
//# sourceMappingURL=main.js.map