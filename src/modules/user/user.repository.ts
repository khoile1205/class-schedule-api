import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserEntity } from "./entity";

@Injectable()
export class UserRepository {
	constructor(@InjectModel(User.name) private model: Model<User>) {}
	getAllUsers(): Promise<User[]> {
		throw new Error("Method not implemented.");
	}
	async getUserById(id: string): Promise<User> {
		return await this.model.findById(id);
	}
	createUser(data: User): Promise<User> {
		throw new Error("Method not implemented.");
	}
	updateUserById(id: number, data: User): Promise<User> {
		throw new Error("Method not implemented.");
	}
	deleteUserById(id: number): Promise<User> {
		throw new Error("Method not implemented.");
	}
	async findOne(condition: Partial<UserEntity>): Promise<User | null> {
		const user = await this.model.findOne(condition);

		return user;
	}
}
