import { Controller, Get, Post } from '@nestjs/common';
import { response } from '../app.module';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get()
    getTasks() {
        return response(this.taskService.getAllTasks(), 'Get all tasks');
    }
    @Post()
    createTask() {
        return response(this.taskService.createTask(), 'Create task');
    }

    @Get('/:id')
    getTaskById() {
        return response(this.taskService.getTaskById(1), 'Get task by id');
    }
}
