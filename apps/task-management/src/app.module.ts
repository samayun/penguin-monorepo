import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';

export function response<T>(result: T, message: string) {
    return {
        success: true,
        message,
        result,
    };
}
@Module({
    imports: [TaskModule],
})
export class AppModule {}
