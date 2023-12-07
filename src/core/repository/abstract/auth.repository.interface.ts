import { SignInDTO } from "@/core/dtos/user";

export interface IAuthRepository {
    signIn(data: SignInDTO): Promise<any>;
}