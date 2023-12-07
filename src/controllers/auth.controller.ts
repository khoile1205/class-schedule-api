import { Body, Controller, Get, Next, Post, Request, Response } from "@nestjs/common";
import { NextFunction } from "express";
import { AuthService } from "@/services/auth.service";
import { SignInDTO } from "@/core/dtos/user";

@Controller('auth')
export class AuthController {
    private _authService: AuthService;
    constructor(_authService: AuthService) {
        this._authService = _authService
    }
    @Post('/signin')
    async findAll(@Body() data: SignInDTO, @Response() res: Response, @Next() next: NextFunction) {
        const result = await this._authService.signIn(data)

        res.json()
    }
}
