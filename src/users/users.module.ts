import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { usersProviders } from './users.providers';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, ...usersProviders]
})
export class UsersModule {}
