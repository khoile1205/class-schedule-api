import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsJWT, IsNumber, IsString } from "class-validator";

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
	@IsNumber()
	status: number;

	@ApiProperty({})
	@IsString()
	message: string;
}
