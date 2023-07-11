import { users } from "@prisma/client";
import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUserDto implements Omit<users, 'id' | 'createdAt' | 'updatedAt'> {
    @IsString()
    @IsNotEmpty()
    public name: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    public email: string;

    @IsString()
    @IsNotEmpty()
    @Length(6, 20)
    public password: string;

    @IsString()
    @IsNotEmpty()
    public avatar: string;
}
