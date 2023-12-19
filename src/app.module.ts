import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import configuration from "./configuration";
import { AuthModule } from "./modules/auth/auth.module";
import { MongooseModule } from "@nestjs/mongoose";
import { ExceptionsModule, LoggerModule } from "./extension";
import { UserModule } from "./modules";
import { UserTokenModule } from "./modules/userToken/user.token.module";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [configuration],
		}),
		LoggerModule,
		MongooseModule.forRootAsync({
			useFactory: () => ({
				uri: configuration().database.connectionString,
			}),
		}),
		JwtModule.register({
			global: true,
		}),
		PassportModule,
		AuthModule,
		UserModule,
		ExceptionsModule,
		UserTokenModule,
	],
})
export class AppModule {}
