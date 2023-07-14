import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repositories/user.repository';
import { PrismaUsersRepository } from './repositories/implementations/prismaUsers.repository';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: UserRepository,
      useClass: PrismaUsersRepository,
    },
  ],
})
export class UserModule {}
