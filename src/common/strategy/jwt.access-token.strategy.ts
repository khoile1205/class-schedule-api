import configuration from "@/configuration";
import { UserService } from "@/modules/user/user.service";
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JWTAccessTokenStrategy extends PassportStrategy(Strategy, "access-token") {
	constructor(private readonly userService: UserService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: configuration().jwt.ACCESS_TOKEN_SECRET_KEY,
			ignoreExpiration: false,
		});
	}
	async validate(payload: JWTPayload) {
		console.log("running");
		return await this.userService.getUserById(payload.id);
	}
}
