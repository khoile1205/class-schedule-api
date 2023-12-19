import { AuthService } from "@/modules/auth/auth.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
	constructor(private readonly _authService: AuthService) {
		super({});
	}

	async validate(username: string, password: string) {
		const user = await this._authService.authenticateUser({ username, password });
		console.log(user);

		if (!user) throw new UnauthorizedException("User not found");

		return user;
	}
}
