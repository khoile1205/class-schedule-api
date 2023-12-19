import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export class SignInDTO {
	@ApiProperty({ default: "test" })
	@IsString()
	username: string;

	@ApiProperty({ default: "test" })
	@IsStrongPassword()
	password: string;
}
