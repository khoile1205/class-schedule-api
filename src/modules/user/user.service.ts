import { Injectable } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { UserEntity } from "@/modules/user/entity";

@Injectable()
export class UserService {
	private _userRepository: UserRepository;

	constructor(_userRepository: UserRepository) {
		this._userRepository = _userRepository;
	}
	async getUserByUsername(username: string): Promise<UserEntity | null> {
		return await this._userRepository.findOne({
			username,
		});
	}

	async getUserById(id: string): Promise<UserEntity | null> {
		return await this._userRepository.getUserById(id);
	}
}
