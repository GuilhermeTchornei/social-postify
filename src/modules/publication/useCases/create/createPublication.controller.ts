import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CreatePublicationService } from './createPublication.service';
import { AuthGuard } from 'src/modules/auth/guard/auth.guard';
import { CreatePublicationDto } from '../../dto/create-publication.dto';
import { AuthRequest } from 'src/modules/auth/decorator/auth.decorator';
import { users } from '@prisma/client';

@Controller('publication')
export class CreatePublicationController {
  constructor(private readonly publicationService: CreatePublicationService) { }

  @UseGuards(AuthGuard)
  @Post()
  async create(@AuthRequest() user: users, @Body() createPublicationDto: CreatePublicationDto) {
    await this.publicationService.create(createPublicationDto, user.id);
  }
}
