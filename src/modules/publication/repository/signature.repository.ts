import { publications, users } from "@prisma/client";
import { CreatePublicationDto } from "../dto/create-publication.dto";

export default abstract class PublicationRepositorySignature {
    abstract createPublication(publication: CreatePublicationDto, userId: number): Promise<void>;
    abstract findAllPublications(): Promise<(publications & { user: users })[]>;
}