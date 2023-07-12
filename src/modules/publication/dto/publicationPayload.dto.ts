export class PublicationPayloadDto {
    id: number;
    image: string;
    text: string;
    dateToPublish: Date;
    published: boolean;
    socialMedia: string;
    userId: number;
    owner: {
        avatar: string,
        name: string,
    }
}