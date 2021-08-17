import { useCallback } from 'react'
import { useTasks } from '../contexts/tasksContext'
import { TaskItem } from '../types/TaskTypes'
import { TaskActionTypes } from '../types/TaskContextTypes'
const useTaskAction = () => {
    const { dispatchTasks } = useTasks()

    const addTask = useCallback((task: TaskItem): void => {
        dispatchTasks({
            type: TaskActionTypes.ADD,
            payload: task,
        })
    }, [dispatchTasks])

    const updateTask = useCallback((task: TaskItem): void => {
        dispatchTasks({
            type: TaskActionTypes.UPDATE,
            payload: task,
        })
    }, [dispatchTasks])

    const toggleTask = useCallback((task: TaskItem): void => {
        dispatchTasks({
            type: TaskActionTypes.TOGGLE,
            payload: task,
        })
    }, [dispatchTasks])

    const deleteTask = useCallback((task: TaskItem): void => {
        dispatchTasks({
            type: TaskActionTypes.DELETE,
            payload: task,
        })
    }, [dispatchTasks])

    return {
        addTask,
        toggleTask,
        updateTask,
        deleteTask,

    }
}

export default useTaskAction

export {}