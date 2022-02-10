import { TaskService } from './task.service';
import { response, reject } from '../app.module';
import { CreateTaskDto } from './dto/create-task.dto';
import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    UsePipes,
    ValidationPipe,
    Query,
    Delete,
} from '@nestjs/common';
import { TaskStatus } from './task.interface';
import { TaskStatusValidationPipe } from './pipes/task.validation';
import { GetTaskFilterDto } from './dto/task-filtering.dto';

@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get()
    @UsePipes(ValidationPipe)
    async getTasks(@Query() filterDto: GetTaskFilterDto) {
        if (Object.keys(filterDto).length) {
            return response(
                await this.taskService.getFilteredTasks(filterDto),
                'Get all filtered tasks',
            );
        }
        return response(await this.taskService.getAllTasks(), 'Get all tasks');
    }

    @Post()
    @UsePipes(ValidationPipe)
    async createTask(@Body() createTaskDto: CreateTaskDto) {
        try {
            return response(await this.taskService.createTask(createTaskDto), 'Create task');
        } catch (error) {
            return reject(error.message);
        }
    }
    @Get('/:id')
    async getTaskById(@Param('id') taskId: string) {
        try {
            return response(await this.taskService.getTaskById(taskId), 'Get task by id');
        } catch (error) {
            return reject(error.message);
        }
    }

    @Delete('/:id')
    async deleteTaskById(@Param('id') taskId: string) {
        try {
            return response(
                await this.taskService.deleteTaskById(taskId),
                'Delete task by id success',
            );
        } catch (error) {
            return reject(error.message);
        }
    }
    @Put('/:id')
    async updateTaskStatus(
        @Param('id') id: string,
        @Body('status', TaskStatusValidationPipe) status: TaskStatus,
    ) {
        return response(await this.taskService.updateTaskStatus(id, status), 'update task status');
    }
}
