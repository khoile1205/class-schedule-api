import {
	Body,
	Controller,
	Get,
	HttpStatus,
	Next,
	Post,
	Req,
	Res,
	UnauthorizedException,
	UseGuards,
} from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import baseResponse from "@/util/baseResponse";
import { LocalGuard } from "@/common/guards/local.guard";
import { SignInDTO } from "./dto/sign.in.dto";
import { UserEntity } from "../user/entity/user";
import { AuthService } from "./auth.service";
import {
	ApiAcceptedResponse,
	ApiBearerAuth,
	ApiBody,
	ApiResponse,
	ApiTags,
	ApiUnauthorizedResponse,
} from "@nestjs/swagger";
import { JWTRefreshTokenGuard } from "@/common/guards/refresh-token.guard";
import { UserTokenService } from "../userToken/user.token.service";
import AppString from "@/appString/AppString";
import { SignInAcceptedResponseDTO, SignInRejectedResponseDTO } from "./dto/sign-in.response.dto";

@Controller("auth")
@ApiTags("Auth")
export class AuthController {
	constructor(private readonly _authService: AuthService) {}

	@Post("/sign-in")
	@ApiBody({ type: SignInDTO })
	@ApiAcceptedResponse({
		status: HttpStatus.OK,
		description: AppString.loginSuccessfully,
		type: SignInAcceptedResponseDTO,
	})
	@ApiUnauthorizedResponse({
		status: HttpStatus.UNAUTHORIZED,
		description: AppString.loginFailed,
		type: SignInRejectedResponseDTO,
	})
	@UseGuards(LocalGuard)
	async signIn(
		@Req() req: Request,
		@Res({
			passthrough: true,
		})
		res: Response
	) {
		const { user } = req;

		const { access_token, refresh_token } = await this._authService.signIn(user as UserEntity);

		res.status(HttpStatus.OK);
		return { access_token, refresh_token };
	}

	@Post("/refresh-access-token")
	@ApiBearerAuth()
	@UseGuards(JWTRefreshTokenGuard)
	async refreshAccessToken(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
		const user = req.user as UserEntity;

		const payload: JWTPayload = {
			id: user._id.toString(),
			username: user.username,
			role: user.role,
		};

		const access_token = this._authService.generateAccessToken(payload);

		res.status(HttpStatus.ACCEPTED);

		return {
			access_token,
		};
	}
}
