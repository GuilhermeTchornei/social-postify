import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { FindAllPublicationService } from './findAllPublication.service';
import { AuthGuard } from 'src/modules/auth/guard/auth.guard';

@Controller('publication')
export class FindAllPublicationController {
  constructor(private readonly publicationService: FindAllPublicationService) {}

  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    return await this.publicationService.findAll();
  }
}
