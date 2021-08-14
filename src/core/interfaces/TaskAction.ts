import { TaskItem } from "../types/TaskTypes";

export interface UpdateTaskInterface {
    (id: string, data: TaskItem): void
}

export interface RemoveTaskInterface {
    (id: string): void
}

export interface AddTaskInterface {
    (data: TaskItem): void
}

export interface ToggleTaskInterface {
    (id: string): void
}