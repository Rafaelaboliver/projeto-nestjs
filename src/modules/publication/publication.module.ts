import { Module } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { PublicationController } from './publication.controller';
import { AuthService } from '../auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/repositories/user.repository';
import { PrismaUsersRepository } from '../user/repositories/implementations/prismaUsers.repository';
import { PublicationRepository } from './repositories/publication.repository';
import { PrismaPublicationRepository } from './repositories/implementations/prismaPublication.repository';

@Module({
  imports: [JwtModule.register({ secret: process.env.JWT_SECRET })],
  controllers: [PublicationController],
  providers: [
    PublicationService,
    AuthService,
    UserService,
    {
      provide: UserRepository,
      useClass: PrismaUsersRepository,
    },
    {
      provide: PublicationRepository,
      useClass: PrismaPublicationRepository,
    },
  ],
})
export class PublicationModule {}