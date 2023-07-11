import { users } from "@prisma/client";
import { CreateUserDto } from "../dto/create-user.dto";

export default abstract class UserRepositorySignature {
    abstract findUserById(id: number): Promise<users>;
    abstract createUser(user: CreateUserDto): Promise<void>;
    abstract findUserByEmail(email: string): Promise<users>;
}