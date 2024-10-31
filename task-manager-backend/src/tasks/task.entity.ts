import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tasks') // Asegúrate de que la tabla en PostgreSQL se llame 'tasks'
export class Task {
  @PrimaryGeneratedColumn()
  id: string; // Corrige 'strin' a 'string'

  @Column()
  title: string;

  @Column({ nullable: true }) // Haz que la descripción sea opcional en la base de datos
  description: string; // Considera agregar 'description?: string;' si es opcional en el DTO
}
