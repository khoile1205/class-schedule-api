import { MongooseModule } from "@nestjs/mongoose";
import { UserToken, UserTokenSchema } from "./entity";
import { UserTokenService } from "./user.token.service";
import { UserTokenRepository } from "./user.token.repository";
import { Module } from "@nestjs/common";

@Module({
	imports: [
		// Model with hooks
		// Model without hooks
		MongooseModule.forFeature([
			{
				name: UserToken.name,
				schema: UserTokenSchema,
				collection: "userTokens",
			},
		]),
	],
	providers: [UserTokenService, UserTokenRepository],
	exports: [UserTokenService, UserTokenRepository],
})
export class UserTokenModule {}
