import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { AuthDto } from './auth.dto';
import { UserDto } from '../users/user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/user.entity'; // Asegúrate de importar tu modelo de usuario

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(userDto: UserDto): Promise<Omit<UserDto, 'password'>> {
    console.log('Register method called with:', userDto);
    const existingUser = await this.usersService.findByEmail(userDto.email);
    if (existingUser) {
      throw new UnauthorizedException('Email already in use');
    }

    const hashedPassword = await bcrypt.hash(userDto.password, 10);
    console.log(hashedPassword); // Guarda esto para comparar
    const user = await this.usersService.create({ ...userDto, password: hashedPassword });
    const { password, ...result } = user;
    return result;
  }

  async login(userDto: AuthDto): Promise<{ accessToken: string }> {
    const user = await this.validateUser(userDto.email, userDto.password);
    console.log('User from database:', user);
    const payload = { email: user.email, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  // Este método valida el usuario
  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.usersService.findByEmail(email);
    console.log('User from database:', user); // Verifica que el usuario se esté encontrando
  
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      console.log('Password match result:', isMatch); // Verifica el resultado de la comparación
      if (isMatch) {
        return user; // Devuelve el usuario si la validación es correcta
      }
    }
    
    throw new UnauthorizedException('Invalid credentials'); // Lanza una excepción si las credenciales son inválidas
  }
  
}
