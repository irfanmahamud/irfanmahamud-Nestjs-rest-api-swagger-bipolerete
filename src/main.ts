import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
  .setTitle('TourMart Admin Backend API')
  .setDescription('Tourmart API description')
  .setVersion('1.0')
  .addServer('http://localhost:4000/', 'Local environment')
  .addServer('https://staging.yourapi.com/', 'Staging')
  .addServer('https://production.yourapi.com/', 'Production')
  .addTag('Your API Tag')
  .build();

const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('api-docs', app, document);

await app.listen(process.env.PORT || 3000);
}
bootstrap();
