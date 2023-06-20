import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY') private usersRepository: Repository<Users>,
  ) {}

  async createUser(user: Users): Promise<Users> {
    return await this.usersRepository.save(user);
  }
  async findAllUsers(): Promise<Users[]> {
    return await this.usersRepository.find();
  }

  async findOneUser(id): Promise<Users> {
    return await this.usersRepository.findOneById(id);
  }

  /* async updateUser(user: Users, userId): Promise<Users> {
    return await this.usersRepository.upsert(user, userId)
  } */
}
