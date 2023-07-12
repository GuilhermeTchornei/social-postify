import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { PrismaModule } from "./prisma/prisma.module";
import { PublicationModule } from "./publication/publication.module";

@Module({
    imports: [PrismaModule, AuthModule, UserModule, PublicationModule],
    exports: [AuthModule, UserModule, PublicationModule],
})
export class IndexModules { }