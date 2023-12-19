import AppString from "@/appString/AppString";
import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsJWT, IsString, IsStrongPassword } from "class-validator";

export class SignInAcceptedResponseDTO {
	@ApiProperty({
		default: HttpStatus.OK,
	})
	status: number;

	@ApiProperty({})
	@IsJWT()
	access_token: string;

	@ApiProperty({})
	@IsJWT()
	refresh_token: string;
}

export class SignInRejectedResponseDTO {
	@ApiProperty({
		default: HttpStatus.UNAUTHORIZED,
	})
	status: number;

	@ApiProperty({})
	message: string;
}
