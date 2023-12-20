import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "../user/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserTokenModule } from "../userToken/user.token.module";
import { JWTRefreshTokenStrategy, LocalStrategy } from "@/common/strategy";

@Module({
	imports: [PassportModule, UserModule, UserTokenModule],
	controllers: [AuthController],
	providers: [LocalStrategy, AuthService, JWTRefreshTokenStrategy],
	exports: [AuthService],
})
export class AuthModule {}
