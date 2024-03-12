// src/todo/application/use-cases/create-todo.use-case.ts

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/domain/dtos/user/create.dto';
import { IUser } from 'src/domain/interfaces/user.interface';
import { UserService } from 'src/application/services/user.services';

@Injectable()
export class GetAllUsersUseCase {
  constructor(private readonly userService: UserService) {}

  async execute(): Promise<IUser[]> {
    return this.userService.findAll();
  }
}
