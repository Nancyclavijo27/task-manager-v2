// src/users/users.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './user.dto'; // Asegúrate de que esta ruta sea correcta

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() userDto: UserDto) {
    return this.usersService.create(userDto);
  }

  // Aquí puedes agregar más métodos para manejar otras rutas relacionadas con usuarios
}
