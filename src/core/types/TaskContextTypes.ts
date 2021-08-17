import { ReactNode, Dispatch } from "react"
import { Tasks, TaskItem } from './TaskTypes'

export type TasksProviderPropsType = {
    children: ReactNode;
}


export enum TaskActionTypes {
    ADD = 'add',
    UPDATE = 'update',
    DELETE = 'delete',
    TOGGLE = 'toggle',
}



export interface TaskAction {
    type: TaskActionTypes;
    payload: TaskItem;
}

export type TaskContextType = {
    tasks: Tasks;
    dispatchTasks: Dispatch<TaskAction>;
}
