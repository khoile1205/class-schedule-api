import configuration from "@/configuration";
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Request } from "express";
import { AuthService } from "@/modules/auth/auth.service";

@Injectable()
export class JWTRefreshTokenStrategy extends PassportStrategy(Strategy, "refresh-token") {
	constructor(private readonly _authService: AuthService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: configuration().jwt.REFRESH_TOKEN_SECRET_KEY,
			passReqToCallback: true,
		});
	}

	async validate(request: Request, payload: JWTPayload) {
		return await this._authService.authenticateUserWithRefreshToken(
			payload.id,
			request.headers.authorization.split("Bearer ")[1]
		);
	}
}
