import { Injectable } from '@nestjs/common';
import { ITask } from './task.interface';

@Injectable()
export class TaskService {
    private tasks: ITask[] = [];
    getAllTasks() {
        return this.tasks;
    }
    createTask(): ITask {
        const id = this.tasks.length + 1;
        const task = {
            id,
            title: 'Test  2',
            description: 'Test task description 2',
            status: 'OPEN',
        };
        this.tasks.push(task);
        return task;
    }

    getTaskById(id: number): ITask {
        return this.tasks.find(task => task.id === id);
    }
}
