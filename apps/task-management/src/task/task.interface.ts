export enum StatusType {
    OPEN = 'OPEN',
}

export type ITask = {
    id: string;
    title: string;
    description: string;
    status: StatusType;
};
