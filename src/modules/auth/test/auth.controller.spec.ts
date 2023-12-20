import { AuthController } from "../auth.controller";
import { AuthService } from "../auth.service";
import { Test } from "@nestjs/testing";
import { LocalStrategy, JWTRefreshTokenStrategy } from "@/common/strategy";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "../../user/user.module";
import { UserTokenModule } from "../../userToken/user.token.module";
import configuration from "@/configuration";
import { MongooseModule } from "@nestjs/mongoose";
import { JwtModule } from "@nestjs/jwt";

describe("AuthController", () => {
	let authController: AuthController;
	let authService: AuthService;

	beforeEach(async () => {
		const moduleRef = await Test.createTestingModule({
			imports: [
				PassportModule,
				UserModule,
				UserTokenModule,
				MongooseModule.forRootAsync({
					useFactory: () => ({
						uri: configuration().database.connectionString,
					}),
				}),
				JwtModule,
			],
			controllers: [AuthController],
			providers: [LocalStrategy, AuthService, JWTRefreshTokenStrategy],
		}).compile();

		authService = moduleRef.get<AuthService>(AuthService);
		authController = moduleRef.get<AuthController>(AuthController);
	});

	it("should be defined", () => {
		expect(authController).toBeDefined();
	});
});
