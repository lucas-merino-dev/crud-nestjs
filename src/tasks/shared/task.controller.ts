import { get } from 'http';
import { TaskService } from './task.service';

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Task } from './task';

@Controller('tasks')
export class TaskController { 
    constructor(
        private TaskService: TaskService
    ){}

    @Get()
    async getAll(): Promise<Task[]>{
        return this.TaskService.getAll();
        
    }
    @Get(':id')
    async buscarPorId(@Param('id') id: string): Promise<Task>{
        return this.TaskService.getByID(id);
    }

    @Post()
    async criar(@Body() Task: Task): Promise<Task>{
        return this.TaskService.create(Task);
    }

    @Put()
    async atualizar (@Param('id') id: string, @Body() Task: Task){
        return this.TaskService.update(id, Task);
    }

    @Delete(':id')
    async deletar(@Param('id') id: string){
        return this.TaskService.delete(id);
    }
}
