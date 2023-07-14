import { Prisma, Publication } from '@prisma/client';

export abstract class PublicationRepository {
  abstract addPublication(data: Prisma.PublicationCreateInput): Promise<Publication>;
  abstract findAllPublications(): Promise<Publication[]>;
  abstract findPublicationById(id: number): Promise<Publication>;
}