import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import configuration from "./configuration";
import AppString from "./appString/AppString";
import * as passport from "passport";

async function bootstrap() {
	const port = configuration().port;

	const app = await NestFactory.create(AppModule, { cors: true });
	app.setGlobalPrefix("api/v0");
	app.use(passport.initialize());

	const swaggerConfig = new DocumentBuilder()
		.setTitle(AppString.swaggerTitle)
		.setDescription(AppString.swaggerDescription)
		.setVersion("1.0")
		.addBearerAuth()
		.build();
	const document = SwaggerModule.createDocument(app, swaggerConfig);
	SwaggerModule.setup("api", app, document);

	await app.listen(port).then(async () => {
		console.log(`Application is running on: ${await app.getUrl()}/api/v0`);
		console.log(`Swagger is running on: ${await app.getUrl()}/api`);
	});
}
bootstrap();
