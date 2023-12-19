import * as bcrypt from "bcrypt";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./entity/mongo.schema/user.schema";
import { UserController } from "./user.controller";
import { UserRepository } from "./user.repository";
import { UserService } from "./user.service";
import { JWTAccessTokenStrategy } from "@/common/strategy";
import { PassportModule } from "@nestjs/passport";

@Module({
	imports: [
		// Model with hooks
		MongooseModule.forFeatureAsync([
			{
				name: User.name,
				useFactory: () => {
					const schema = UserSchema;
					schema.pre("save", async function (next) {
						if (!this.isModified(this.password)) {
							return next();
						}
						const hashedPassword = await bcrypt.hash(this.password, 10);
						this.password = hashedPassword;
						next();
					});

					schema.set("toJSON", {
						transform: function (doc, ret) {
							delete ret.password;
						},
					});

					return schema;
				},
				collection: "users",
			},
		]),
		PassportModule,
	],
	controllers: [UserController],
	providers: [UserService, UserRepository, JWTAccessTokenStrategy],
	exports: [UserService, UserRepository],
})
export class UserModule {}
