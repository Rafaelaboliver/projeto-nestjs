import {
  Controller,
  Post,
  Body,
  UseGuards,
} from '@nestjs/common';
import { PublicationService } from './publication.service';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { AuthGuard } from '../auth/authGuard/auth.guard';

@Controller()
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

  @UseGuards(AuthGuard)

  @Post('publication')
  create(@Body() createPublicationDto: CreatePublicationDto) {
    return this.publicationService.create(createPublicationDto);
  }
}
