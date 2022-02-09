import { TaskService } from './task.service';
import { response, reject } from '../app.module';
import { CreateTaskDto } from './dto/create-task.dto';
import { Controller, Get, Post, Body, Param, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { StatusType } from './task.interface';

@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get()
    getTasks() {
        return response(this.taskService.getAllTasks(), 'Get all tasks');
    }

    @Post()
    @UsePipes(ValidationPipe)
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

    @Get('/:id')
    deleteTaskById(@Param('id') taskId: string) {
        try {
            return response(this.taskService.deleteTaskById(taskId), 'delete task by id');
        } catch (error) {
            return reject(error.message);
        }
    }
    @Put('/:id')
    updateTaskStatus(@Param('id') id: string, @Body() status: StatusType) {
        return this.taskService.updateTaskStatus(id, status);
    }
}
