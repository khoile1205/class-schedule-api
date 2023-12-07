import { Controller, Get, Next, Request, Response } from "@nestjs/common";
import { NextFunction } from "express";
import { UserService } from "../services/user.service";

@Controller('user')
export class UserController {
    private _userService: UserService;
    constructor(userService: UserService) {
        this._userService = userService
    }
    @Get()
    async findAll(@Request() req: Request, @Response() res: Response, @Next() next: NextFunction) {
        const result = await this._userService.getAllUsers()

        res.json()
    }
}
