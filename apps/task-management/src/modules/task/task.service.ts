import { Injectable, NotFoundException } from '@nestjs/common';
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

    getFilteredTasks(filterDto: GetTaskFilterDto): Promise<Task[]> {
        const { status, search } = filterDto;
        let tasks = this.getAllTasks();
        if (status) {
            tasks = this.taskRepository.find({
                where: { status },
            });
        }
        if (search) {
            tasks = this.taskRepository.find({
                where: { status },
            });
        }
        return tasks;
    }

    async getAllTasks() {
        return this.taskRepository.find({});
    }
    createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        return this.taskRepository.createTask(createTaskDto);
    }

    async getTaskById(id: string): Promise<Task> {
        const task = this.taskRepository.findOne(id);

        if (task) {
            return task;
        } else {
            throw new NotFoundException(`Task with ${id} not found`);
        }
    }
    async deleteTaskById(id: string): Promise<void> {
        await this.taskRepository.delete(id);
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
