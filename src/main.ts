import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from './configuration/swagger';
import { ConfigService } from '@nestjs/config';
import configuration from './configuration';

async function bootstrap() {
  const port = configuration().port;
  
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');

  const document = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('api', app, document);

  await app.listen(port).then(async () => {
    console.log(`Application is running on: ${await app.getUrl()}/api/v0`);
    console.log(`Swagger is running on: ${await app.getUrl()}/api`);
  })
}
bootstrap();
