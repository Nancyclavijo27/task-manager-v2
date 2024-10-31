import { Injectable, ConflictException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async create(userDto: UserDto): Promise<User> {
        const existingUser = await this.userRepository.findOne({ where: { email: userDto.email } });
        if (existingUser) {
            throw new ConflictException('Este correo electrónico ya está en uso');
        }

        // Cifrar la contraseña antes de crear el usuario
        const hashedPassword = await bcrypt.hash(userDto.password, 10);
        const newUser = this.userRepository.create({ ...userDto, password: hashedPassword });

        await this.userRepository.save(newUser);
        return newUser;
    }

    async findByEmail(email: string): Promise<User | undefined> {
        return this.userRepository.findOne({ where: { email } });
    }

    async findById(id: string): Promise<User> {
        const user = await this.userRepository.findOne({ where: { id: Number(id) } });
        if (!user) {
            throw new NotFoundException('Usuario no encontrado');
        }
        return user;
    }

    // Agrega un método para manejar el login
    async validateUser(email: string, plainPassword: string): Promise<User> {
        const user = await this.userRepository.findOne({ where: { email } });
        if (!user) {
            throw new NotFoundException('Usuario no encontrado');
        }

        // Compara la contraseña cifrada
        const isPasswordMatching = await bcrypt.compare(plainPassword, user.password);
        if (!isPasswordMatching) {
            throw new UnauthorizedException('Credenciales inválidas');
        }

        return user; // Retorna el usuario si la contraseña es válida
    }
}
