import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() user: Users): Promise<Users> {
    return await this.usersService.createUser(user);
  }

  @Get()
  async findAll(): Promise<Users[]> {
    return await this.usersService.findAllUsers();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Users> {
    return await this.usersService.findOneUser(id);
  }
}
