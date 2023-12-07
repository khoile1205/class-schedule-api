import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import configuration from './configuration';
import AppString from './appString/AppString';

async function bootstrap() {
  const port = configuration().port;

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v0');

  const swaggerConfig = new DocumentBuilder()
    .setTitle(AppString.applicationName)
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('api', app, document);

  await app.listen(port).then(async () => {
    console.log(`Application is running on: ${await app.getUrl()}/api/v0`);
    console.log(`Swagger is running on: ${await app.getUrl()}/api`);
  })
}
bootstrap();
