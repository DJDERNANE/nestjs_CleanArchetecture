// src/todo/infrastructure/typeorm/user.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity'; // Adjust the path if necessary
//import { UserRepository } from '../repositories/user.repository'; // Adjust the path if necessary
import { UserController } from 'src/application/controllers/user.controller'; // Adjust the path if necessary
import { CreateUserDto } from 'src/domain/dtos/user/create.dto';
import { CreateUserUseCase } from 'src/application/usecases/user/create.usecase';
import { GetAllUsersUseCase } from 'src/application/usecases/user/getAll.usecase';
import { UserService } from 'src/application/services/user.services';
import { userProviders } from '../providers/user.provider';
import { DatabaseModule } from '../../external_interfaces/database.module';

@Module({
  imports: [
    DatabaseModule
  ],
  providers: [
    ...userProviders, CreateUserUseCase, GetAllUsersUseCase,UserService// Provide the UserRepository
  ],
  exports: [
    //UserRepository, // Export the UserRepository to be used in other modules if needed
  ],
  controllers: [UserController]
})
export class UserModule {}
