// src/User/application/services/User.service.ts

import { Injectable, Inject } from '@nestjs/common';
import { IUser } from '../../domain/interfaces/user.interface';
//import { UserRepository } from 'src/infrastructure/repositories/user.repository';
import { CreateUserDto } from '../../domain/dtos/user/create.dto';
import { User } from 'src/infrastructure/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
      ) {}
    
  

  async findAll(): Promise<IUser[]> {
    return await this.userRepository.find();
  }

  async findById(id: number): Promise<IUser> {
    return await this.userRepository.findOne(id);
  }

  async create(UserDto: CreateUserDto): Promise<IUser> {
    return await this.userRepository.create(UserDto);
  }

  async update(id: number, UserDto: CreateUserDto): Promise<IUser> {
    const User = await this.findById(id);
    if (!User) {
      // Handle not found error
      return null;
    }
    // Update User properties
   
    return await this.userRepository.save(User);
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
