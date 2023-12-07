import { AuthController, UserController } from "@/controllers";
import { AuthRepository } from "@/core/repository/auth.repository";
import { AuthService } from "@/services/auth.service";
import { Module } from "@nestjs/common";

@Module({
    controllers: [AuthController],
    providers: [AuthService, AuthRepository],
})

export class AuthModule { }