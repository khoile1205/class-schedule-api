import { Controller, Get, HttpStatus, Param, Req, Res, UseGuards } from "@nestjs/common";
import { Request, Response } from "express";
import { UserService } from "./user.service";
import { ApiBearerAuth, ApiResponse, ApiTags } from "@nestjs/swagger";
import { JWTAccessTokenGuard } from "@/common/guards/access-token.guard";

@Controller("users")
@ApiBearerAuth()
@UseGuards(JWTAccessTokenGuard)
@ApiTags("User")
export class UserController {
	private _userService: UserService;
	constructor(userService: UserService) {
		this._userService = userService;
	}

	@Get("/profile")
	@ApiResponse({ status: 200, description: "" })
	async getUserInfoByToken(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
		res.status(HttpStatus.OK);
		
		const { user } = req;

		return user;
	}
}
