import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/task-filtering.dto';
import { ITask, TaskStatus } from './task.interface';
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(TaskRepository)
        private readonly taskRepository: TaskRepository,
    ) {}

    private tasks: ITask[] = [];

    getFilteredTasks(filterDto: GetTaskFilterDto): ITask[] {
        const { status, search } = filterDto;
        let tasks = this.getAllTasks();
        if (status) {
            tasks = tasks.filter(task => task.status === status);
        }
        if (search) {
            tasks = tasks.filter(
                task =>
                    task.title.toLowerCase().includes(search) ||
                    task.description.toLowerCase().includes(search),
            );
        }
        return tasks;
    }

    getAllTasks() {
        return this.tasks;
    }
    createTask({ title, description }: CreateTaskDto): ITask {
        const task = {
            id: randomUUID(),
            title: title,
            description: description,
            status: TaskStatus.OPEN,
        };
        this.tasks.push(task);
        return task;
    }

    getTaskById(id: string): ITask {
        const task = this.tasks.find(task => task.id === id);

        if (task) {
            return task;
        } else {
            throw new NotFoundException(`Task with ${id} not found`);
        }
    }
    deleteTaskById(id: string): void {
        const found = this.getTaskById(id);
        this.tasks = this.tasks.filter(task => task.id !== found.id);
    }
    updateTaskStatus(id: string, status: TaskStatus) {
        const task = this.tasks.find(task => task.id === id);
        task.status = status;
        return task;
    }
}
