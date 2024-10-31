import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './auth.dto'; // DTO para el inicio de sesión
import { UserDto } from '../users/user.dto'; // DTO para el registro
import { User } from '../users/user.entity'; // Importa la entidad User
import { UsersService } from '../users/users.service'; // Importa el servicio de usuarios

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService, // Ahora debería estar definido
  ) {}

  @Post('register')
  async register(@Body() userDto: UserDto): Promise<User> {
    return this.usersService.create(userDto); // Devuelve el usuario con el ID
  }

  @Post('login')
  async login(@Body() authDto: AuthDto) {
    return this.authService.login(authDto);
  }
}
