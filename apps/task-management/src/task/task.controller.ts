import { TaskService } from './task.service';
import { response, reject } from '../app.module';
import { CreateTaskDto } from './dto/create-task.dto';
import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get()
    getTasks() {
        return response(this.taskService.getAllTasks(), 'Get all tasks');
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto) {
        try {
            return response(this.taskService.createTask(createTaskDto), 'Create task');
        } catch (error) {
            return reject(error.message);
        }
    }
    @Get('/:id')
    getTaskById(@Param('id') taskId: string) {
        try {
            return response(this.taskService.getTaskById(taskId), 'Get task by id');
        } catch (error) {
            return reject(error.message);
        }
    }
}
