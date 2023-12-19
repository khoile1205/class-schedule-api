import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { UserToken, UserTokenEntity } from "./entity";

@Injectable()
export class UserTokenRepository {
	constructor(@InjectModel(UserToken.name) private model: Model<UserToken>) {}

	async createUserToken(userId: string, refreshToken: string): Promise<UserToken> {
		return await this.model.create({
			refreshToken,
			userId,
		});
	}

	async findOne(condition: Partial<UserTokenEntity>): Promise<UserToken | null> {
		const user = await this.model.findOne(condition);

		if (!user) return null;
		return user.toObject();
	}
	async updateRefreshTokenByUserId(userId: string, refreshToken: string): Promise<UserToken> {
		await this.model.findOneAndUpdate(
			{
				userId,
			},
			{
				refreshToken,
			}
		);

		const newData: UserToken = await this.findOne({ userId });

		return newData;
	}
}
