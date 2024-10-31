// src/users/dto/user.dto.ts
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class UserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 20) // Asegura que la contraseña tenga entre 6 y 20 caracteres
  password: string;

  // Puedes agregar más campos según sea necesario, por ejemplo:
  // @IsString()
  // @IsNotEmpty()
  // username: string;
}
