import { ReactNode } from "react"
import { Tasks } from './TaskTypes'
import { UpdateTaskInterface, RemoveTaskInterface, AddTaskInterface, ToggleTaskInterface } from "../interfaces/TaskAction"

export type TasksProviderPropsType = {
    children: ReactNode;
}

export type TaskContextType = {
    tasks: Tasks;
    add: AddTaskInterface;
    remove: RemoveTaskInterface;
    update: UpdateTaskInterface;
    toggle: ToggleTaskInterface;
}