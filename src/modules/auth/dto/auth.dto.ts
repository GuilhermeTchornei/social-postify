import { users } from "@prisma/client";
import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class AuthDto implements Pick<users, 'email' | 'password'> {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    public email: string;

    @IsString()
    @IsNotEmpty()
    @Length(6, 20)
    public password: string;
}
