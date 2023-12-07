import { Injectable } from "@nestjs/common";
import { SignInDTO } from "@/core/dtos/user";
import { AuthRepository } from "@/core/repository/auth.repository";

export interface IAuthService {
    signIn(data: SignInDTO): Promise<any>
}

@Injectable()
export class AuthService implements IAuthService {
    private _authRepository: AuthRepository;

    constructor(authRepository: AuthRepository) {
        this._authRepository = authRepository
    }

    signIn(data: SignInDTO): Promise<any> {
        return this._authRepository.signIn(data);
    }
}