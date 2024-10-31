// src/tasks/tasks.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Asegúrate de importar TypeOrmModule
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Task } from './task.entity'; // Importa la entidad Task

@Module({
  imports: [TypeOrmModule.forFeature([Task])], // Asegúrate de registrar la entidad aquí
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
