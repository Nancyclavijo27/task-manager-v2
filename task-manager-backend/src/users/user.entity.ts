import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true }) // Asegúrate de que el email sea único
    email: string;

    @Column()
    password: string;
}
