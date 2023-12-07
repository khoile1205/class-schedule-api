import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export class SignInDTO {
    @ApiProperty()
    @IsString()
    username: string

    @ApiProperty()
    @IsStrongPassword()
    password: string
}