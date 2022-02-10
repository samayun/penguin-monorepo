import { Task } from './task.entity';
import { Repository, BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export class TaskRepository extends Repository<Task> {}
