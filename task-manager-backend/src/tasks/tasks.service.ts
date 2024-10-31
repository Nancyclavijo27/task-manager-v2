import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.entity'; // Importa tu entidad de Task
import { TaskDto } from './task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = []; // Aquí almacenas tus tareas en memoria (puedes reemplazar esto por una base de datos)

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: string): Task {
    const task = this.tasks.find(t => t.id === id);
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }

  create(taskDto: TaskDto): Task {
    const newTask: Task = {
      id: Date.now().toString(), // Generar un ID único (puedes usar UUID en su lugar)
      ...taskDto,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  update(id: string, taskDto: TaskDto): Task {
    const taskIndex = this.tasks.findIndex(t => t.id === id);
    if (taskIndex === -1) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    const updatedTask = { ...this.tasks[taskIndex], ...taskDto };
    this.tasks[taskIndex] = updatedTask;
    return updatedTask;
  }

  remove(id: string): void {
    const taskIndex = this.tasks.findIndex(t => t.id === id);
    if (taskIndex === -1) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    this.tasks.splice(taskIndex, 1);
  }
}
