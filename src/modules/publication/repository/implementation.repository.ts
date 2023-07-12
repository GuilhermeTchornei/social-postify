import { Injectable } from "@nestjs/common";
import { CreatePublicationDto } from "../dto/create-publication.dto";
import PublicationRepositorySignature from "./signature.repository";
import { PrismaService } from "src/modules/prisma/prisma.service";
import { publications, users } from "@prisma/client";

@Injectable()
export default class PublicationRepository implements PublicationRepositorySignature {
    constructor(private readonly prisma: PrismaService) { };

    async createPublication(publication: CreatePublicationDto, userId: number): Promise<void> {
        await this.prisma.publications.create({
            data: {
                ...publication,
                user_id: userId,
            }
        });
    }

    async findAllPublications(): Promise<(publications & { user: users })[]> {
        return await this.prisma.publications.findMany({
            include: {
                user: true,
            }
        });
    }
}