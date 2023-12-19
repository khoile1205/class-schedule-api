import { Injectable } from "@nestjs/common";
import { UserTokenRepository } from "./user.token.repository";

@Injectable()
export class UserTokenService {
	private _userTokenRepository: UserTokenRepository;

	constructor(_userTokenRepository: UserTokenRepository) {
		this._userTokenRepository = _userTokenRepository;
	}

	async getUserByUserIdAndRefreshToken(userId: string, refreshToken: string) {
		return await this._userTokenRepository.findOne({ userId, refreshToken });
	}

	async setCurrentRefreshToken(userId: string, refreshToken: string) {
		const data = await this._userTokenRepository.findOne({ userId });

		if (!data) {
			await this._userTokenRepository.createUserToken(userId, refreshToken);
		} else {
			await this._userTokenRepository.updateRefreshTokenByUserId(userId, refreshToken);
		}

		const result = await this._userTokenRepository.findOne({ userId });

		return result;
	}
}
