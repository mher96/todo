export type TaskItem = {
    id: string;
    title: string;
    description: string;
    status: boolean;
    date: Date;
}

export type Tasks = Array<TaskItem>

