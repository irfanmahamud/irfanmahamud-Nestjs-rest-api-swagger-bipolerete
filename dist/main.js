"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const options = new swagger_1.DocumentBuilder()
        .setTitle('TourMart Admin Backend API')
        .setDescription('Tourmart API description')
        .setVersion('1.0')
        .addServer('http://localhost:4000/', 'Local environment')
        .addServer('https://staging.yourapi.com/', 'Staging')
        .addServer('https://production.yourapi.com/', 'Production')
        .addTag('Your API Tag')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api-docs', app, document);
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map