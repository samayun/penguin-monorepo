import { Task } from './task.entity';
import {
    Repository,
    EntityRepository,
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm';
import { TaskStatus } from './task.interface';
import { CreateTaskDto } from './dto/create-task.dto';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
    async createTask({ title, description }: CreateTaskDto): Promise<Task> {
        const task = await this.create({
            title: title,
            description: description,
            status: TaskStatus.OPEN,
        });

        return this.save(task);
    }
}
