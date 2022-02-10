import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/task-filtering.dto';
import { Task } from './task.entity';
import { TaskStatus } from './task.interface';
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(TaskRepository)
        private readonly taskRepository: TaskRepository,
    ) {}

    async getFilteredTasks(filterDto: GetTaskFilterDto): Promise<Task[]> {
        const { status, search } = filterDto;
        let tasks = await this.getAllTasks();
        if (status) {
            tasks = await this.taskRepository.find({
                where: { status },
            });
        }
        if (search) {
            tasks = await this.taskRepository.find({
                where: {},
            });
        }
        return tasks;
    }

    getAllTasks() {
        return this.taskRepository.find();
    }
    createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        return this.taskRepository.createTask(createTaskDto);
    }

    async getTaskById(id: string): Promise<Task> {
        const task = await this.taskRepository.findOne(id);

        if (task) {
            return task;
        } else {
            throw new NotFoundException(`Task with ${id} not found`);
        }
    }
    async deleteTaskById(id: string) {
        const isDeleted = await this.taskRepository.delete(id);
        if (!isDeleted) {
            throw new BadRequestException(`Task with ${id} not found`);
        }
        return isDeleted && true;
    }
    async updateTaskStatus(id: string, status: TaskStatus) {
        const task = await this.taskRepository.update(
            {
                id,
            },
            {
                status,
            },
        );
        return task;
    }
}
