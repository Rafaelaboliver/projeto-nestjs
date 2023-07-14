import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';
import { PublicationRepository } from './repositories/publication.repository';
import { Publication, User } from '@prisma/client';

@Injectable()
export class PublicationService {
  constructor(private readonly publicationsRepository: PublicationRepository) {}
  async create(currentUser: User, data: CreatePublicationDto) {
    const publicationAlreadyExists: Publication =
      await this.publicationsRepository.findByTitle(data.title);

    if (publicationAlreadyExists) {
      throw new HttpException(
        'Publication already exists',
        HttpStatus.CONFLICT,
      );
    }
    const publicationData = {
      ...data,
      userId: currentUser.id,
    };
    await this.publicationsRepository.addPublication(publicationData);
  }

  async getAllPublications(user: User) {
    return await this.publicationsRepository.findPublicationByUserId(user.id);
  }
}
