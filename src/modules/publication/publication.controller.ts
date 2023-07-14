import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { AuthGuard } from '../auth/authGuard/auth.guard';
import { UserRequest } from '../auth/decorators/user.decorators';
import { User } from '@prisma/client';

@Controller()
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

  @UseGuards(AuthGuard)
  @Post('publication')
  create(@Body() createPublicationDto: CreatePublicationDto, @UserRequest() currentUser: User) {
    return this.publicationService.create(currentUser, createPublicationDto);
  }

  @UseGuards(AuthGuard)
  @Get('publications')
  getAllPublications( @UserRequest() currentUser: User) {
    return this.publicationService.getAllPublications(currentUser);
  }
}
