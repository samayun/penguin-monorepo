import { ArgumentMetadata, BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../task.interface';

export class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStates = [TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE];

    transform(value: any, metadata: ArgumentMetadata) {
        console.log({
            value,
            metatype: metadata.metatype,
            metadata,
        });
        value = value.toUpperCase();

        if (!this.isStatusValid(value)) {
            throw new BadRequestException(`${value} is an invalid status`);
        }

        return value;
    }

    private isStatusValid(status: any) {
        return this.allowedStates.indexOf(status) !== -1;
    }
}
