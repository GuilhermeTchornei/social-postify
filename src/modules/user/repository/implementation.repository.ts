import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../dto/create-user.dto";
import { users } from "@prisma/client";
import { PrismaService } from "src/modules/prisma/prisma.service";
import UserRepositorySignature from "./signature.repository";

@Injectable()
export class UserRepository implements UserRepositorySignature {
    constructor(private readonly prisma: PrismaService) { };

    async createUser(user: CreateUserDto): Promise<void> {
        await this.prisma.users.create({ data: user });
    }

    async findUserById(id: number): Promise<users> {
        return await this.prisma.users.findFirst({ where: { id } });
    }

    async findUserByEmail(email: string): Promise<users> {
        return await this.prisma.users.findFirst({ where: { email } });
    }
}