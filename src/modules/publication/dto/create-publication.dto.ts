import { publications } from "@prisma/client";
import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreatePublicationDto implements Omit<publications, 'id' | 'published' | 'user_id'> {
    @IsString()
    @IsNotEmpty()
    image: string;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    text: string;

    @Type(() => Date)
    @IsDate()
    @IsNotEmpty()
    date_to_publish: Date;

    @IsString()
    @IsNotEmpty()
    social_media: string;
}
