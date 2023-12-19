import { Controller, Get, Next, Param, Req, Res, UseGuards } from "@nestjs/common";
import { Request, Response } from "express";
import { UserService } from "./user.service";
import { ApiBearerAuth, ApiResponse, ApiTags } from "@nestjs/swagger";
import { JWTAccessTokenGuard } from "@/common/guards/access-token.guard";

@Controller("user")
@ApiBearerAuth()
@UseGuards(JWTAccessTokenGuard)
@ApiTags("User")
export class UserController {
	private _userService: UserService;
	constructor(userService: UserService) {
		this._userService = userService;
	}

	@Get("/:username")
	@ApiResponse({ status: 201, description: "The record has been successfully created." })
	async findByUsername(
		@Param("username") username: string,
		@Req() req: Request,
		@Res() res: Response
	) {
		const result = await this._userService.getUserByUsername(username);

		res.status(201).json({ result });
	}
}
