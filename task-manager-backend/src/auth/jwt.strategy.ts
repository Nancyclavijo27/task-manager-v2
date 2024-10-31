// src/auth/jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { Strategy } from 'passport-jwt';
import { ExtractJwt } from 'passport-jwt';
import { UsersService } from '../users/users.service';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'your_secret_key', // Cambia esto por tu clave secreta
    });
  }

  async validate(payload: any) {
    return this.usersService.findById(payload.sub); // Devuelve el usuario
  }
}
