import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { SignInDTO } from "@/modules/auth/dto/sign.in.dto";
import { UserEntity } from "@/modules/user/entity";
import { UserTokenService } from "../userToken/user.token.service";
import { UserService } from "../user/user.service";
import configuration from "@/configuration";

@Injectable()
export class AuthService {
	constructor(
		private readonly _userService: UserService,
		private readonly _jwtService: JwtService,
		private readonly _userTokenService: UserTokenService
	) {}

	async authenticateUser(data: SignInDTO): Promise<UserEntity> {
		const user = await this._userService.getUserByUsername(data.username);

		if (!user) throw new UnauthorizedException("User not found");

		await this.verifyPlainContentWithHashingContent(data.password, user.password);

		return user;
	}
	async signIn(user: UserEntity): Promise<any> {
		const payload = { username: user.username, role: user.role, id: user._id.toString() };
		const refreshToken = this.generateRefreshToken(payload);

		await this._userTokenService.setCurrentRefreshToken(user._id.toString(), refreshToken);

		return {
			access_token: this.generateAccessToken(payload),
			refresh_token: refreshToken,
		};
	}

	generateAccessToken(payload: JWTPayload): string {
		return this._jwtService.sign(payload, {
			secret: configuration().jwt.ACCESS_TOKEN_SECRET_KEY,
			expiresIn: configuration().jwt.ACCESS_TOKEN_EXPIRATION_TIME,
		});
	}

	async authenticateUserWithRefreshToken(
		userId: string,
		refreshToken: string
	): Promise<UserEntity> {
		const userWithRefreshToken = await this._userTokenService.getUserByUserIdAndRefreshToken(
			userId,
			refreshToken
		);

		if (!userWithRefreshToken) throw new UnauthorizedException();

		const user = await this._userService.getUserById(userId);

		return user;
	}

	generateRefreshToken(payload: JWTPayload): string {
		return this._jwtService.sign(payload, {
			secret: configuration().jwt.REFRESH_TOKEN_SECRET_KEY,
			expiresIn: configuration().jwt.REFRESH_TOKEN_EXPIRATION_TIME,
		});
	}

	private async verifyPlainContentWithHashingContent(plain_text: string, hashing_text: string) {
		const isMatching = await bcrypt.compare(plain_text, hashing_text);

		if (!isMatching) throw new UnauthorizedException("Wrong password");
	}
}
