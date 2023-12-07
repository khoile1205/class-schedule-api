import { ConsoleLogger, Injectable } from "@nestjs/common";
import { IUserRepository } from "./abstract/user.repository.interface";
import { IGenericRepository } from "./abstract";
import { UserEntity } from "../entities/user";
import { IAuthRepository } from "./abstract/auth.repository.interface";
import { SignInDTO } from "../dtos/user";

@Injectable()
export class AuthRepository implements IAuthRepository {
    signIn(data: SignInDTO): Promise<any> {
        return Promise.resolve("Login to be implemented");
    }

}