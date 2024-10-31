import { Controller, Get, Post, Body, Put, Delete, Param, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { TaskDto } from './task.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  // Obtener todas las tareas
  @UseGuards(JwtAuthGuard) // Protege esta ruta
  @Get()
  async findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  // Crear una tarea
  @UseGuards(JwtAuthGuard) // Protege esta ruta
  @Post()
  async create(@Body() taskDto: TaskDto): Promise<Task> {
    return this.tasksService.create(taskDto);
  }

  // Obtener una tarea específica
  @UseGuards(JwtAuthGuard) // Protege esta ruta
  @Get(':id') // Ruta para obtener una tarea por ID
  async findOne(@Param('id') id: string): Promise<Task> {
    return this.tasksService.findOne(id);
  }

  // Actualizar una tarea
  @UseGuards(JwtAuthGuard) // Protege esta ruta
  @Put(':id') // Ruta para actualizar una tarea por ID
  async update(@Param('id') id: string, @Body() taskDto: TaskDto): Promise<Task> {
    return this.tasksService.update(id, taskDto);
  }

  // Eliminar una tarea
  @UseGuards(JwtAuthGuard) // Protege esta ruta
  @Delete(':id') // Ruta para eliminar una tarea por ID
  async remove(@Param('id') id: string): Promise<void> {
    return this.tasksService.remove(id);
  }
}
