import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateTaskDto } from './dto/create-task.dto';
import { ITask, StatusType } from './task.interface';

@Injectable()
export class TaskService {
    private tasks: ITask[] = [];
    getAllTasks() {
        return this.tasks;
    }
    createTask({ title, description }: CreateTaskDto): ITask {
        const task = {
            id: randomUUID(),
            title: title,
            description: description,
            status: StatusType.OPEN,
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
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
    updateTaskStatus(id: string, status: StatusType) {
        const task = this.tasks.find(task => task.id === id);
        task.status = status;
        return task;
    }
}
