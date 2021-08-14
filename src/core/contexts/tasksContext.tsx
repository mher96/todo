import React, { useCallback, useContext, useState } from 'react'
import { TaskItem, Tasks } from '../types/TaskTypes'
import { TasksProviderPropsType, TaskContextType } from '../types/TaskContextTypes'

// const taskss = [
//         {
//             id: '1',
//             title: '1',
//             description: 'd1',
//             status: false
//         },
//         {
//             id: '2',
//             title: '2',
//             description: 'dçASDasd2',
//             status: true
//         },
//         {
//             id: '3',
//             title: '3',
//             description: 'dasdasDAsd1',
//             status: false
//         },
//     ]
const initialValue: TaskContextType= {
    tasks: [],
    add: (data) => {},
    update: (id, data) => {},
    remove: (id) => {},
    toggle: (id) => {},
}

const TasksContext = React.createContext<TaskContextType>(initialValue)

export const useTasks = () => useContext(TasksContext)

const TasksProvider = (props:TasksProviderPropsType ) => {
    const [tasks, setTasks] = useState<Tasks>([])

    const add = (data: TaskItem) => {
        setTasks([
            ...tasks,
            data
        ])
    }

    const update = (id: string, data: TaskItem) => {
        const updatedList = tasks.map(
            task => task.id === id 
                ? data
                : task
        )
        setTasks(updatedList)
    }

    const remove = (id: string) => {
        const updatedLIst = tasks.filter(task => task.id !== id)

        setTasks(updatedLIst)
    }

    const toggle =(id: string): void => {
        const tasksList = tasks.map(task => {
            if(task.id === id) return {
                ...task,
                status: !task.status
            }

            return task
        })

        setTasks(tasksList)
    }

    return (    
        <TasksContext.Provider value={{
            tasks,
            add,
            update,
            remove,
            toggle,
        }}>
            {props.children}
        </TasksContext.Provider>
    )

}

export default TasksProvider