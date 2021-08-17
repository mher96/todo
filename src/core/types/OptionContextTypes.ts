import { Dispatch, ReactNode } from 'react'

export enum TaskOrderTypes {
    DATE = 'DATE',
    STATUS = 'STATUS',
}

export type TaskContextType = {
    sort: TaskOrderTypes;
    setSort: Dispatch<TaskOrderTypes>;
}

export type TasksOptionProviderPropsType = {
    children: ReactNode;
}

