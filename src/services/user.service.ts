import { Injectable } from "@nestjs/common";
import { UserRepository } from "../core/repository/mongo.user.repository";

export interface IUserService {
    getAllUsers(): Promise<any>
}

@Injectable()
export class UserService implements IUserService {
    private _userRepositorty: UserRepository;

    constructor(userReposositry: UserRepository) {
        this._userRepositorty = userReposositry
    }

    getAllUsers(): Promise<any> {
        return this._userRepositorty.getAllEntities();
    }

}