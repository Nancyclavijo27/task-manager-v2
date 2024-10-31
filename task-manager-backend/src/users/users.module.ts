// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity'; // Asegúrate de que esta entidad esté definida

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Asegúrate de incluir tu entidad aquí
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
