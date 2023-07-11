import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { PrismaModule } from "./prisma/prisma.module";

@Module({
    imports: [PrismaModule, AuthModule, UserModule],
    exports: [AuthModule, UserModule],
})
export class IndexModules { }