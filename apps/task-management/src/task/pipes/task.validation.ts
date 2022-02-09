import { ArgumentMetadata, BadRequestException, PipeTransform } from '@nestjs/common';
import { StatusType } from '../task.interface';

export class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStates = [StatusType.OPEN, StatusType.IN_PROGRESS, StatusType.DONE];

    transform(value: any, metadata: ArgumentMetadata) {
        console.log({
            value,
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
