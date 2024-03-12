// src/app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './infrastructure/modules/user.module';
import { UserController } from './application/controllers/user.controller';
import { databaseProviders } from './external_interfaces/database.provider';
import { DatabaseModule } from './external_interfaces/database.module';

@Module({
  imports: [UserModule, DatabaseModule],
 // providers: [...databaseProviders]
  //controllers: [UserController],
})
export class AppModule {}
