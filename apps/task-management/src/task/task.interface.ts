export enum StatusType {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}

export type ITask = {
    id: string;
    title: string;
    description: string;
    status: StatusType;
};
