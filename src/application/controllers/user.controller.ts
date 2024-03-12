// src/IUser/application/controllers/IUser.controller.ts

import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { UserService } from '../services/user.services';
import { CreateUserDto } from '../../domain/dtos/user/create.dto';
import { IUser } from '../../domain/interfaces/user.interface';
import { GetAllUsersUseCase } from '../usecases/user/getAll.usecase';
import { CreateUserUseCase } from '../usecases/user/create.usecase';
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService,
            private readonly getalluserUsecase: GetAllUsersUseCase,
            private readonly createuserUsecase: CreateUserUseCase) {}

  @Get()
  async findAll() {
    return this.getalluserUsecase.execute();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IUser> {
    return this.userService.findById(+id);
  }

  @Post()
  async create(@Body() createIUserDto: CreateUserDto): Promise<IUser> {
    return this.createuserUsecase.execute(createIUserDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() createIUserDto: CreateUserDto): Promise<IUser> {
    return this.userService.update(+id, createIUserDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.userService.delete(+id);
  }
}
