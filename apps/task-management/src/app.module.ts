import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';

export function response<T>(data: T, message: string) {
    return {
        success: true,
        message,
        data,
    };
}

export function reject(message: string) {
    return {
        success: false,
        message,
        data: null,
    };
}

@Module({
    imports: [TaskModule],
})
export class AppModule {}
