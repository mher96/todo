import React, { 
    useContext, 
    useReducer,
} from 'react'
import { Tasks } from '../types/TaskTypes'
import { 
    TasksProviderPropsType, 
    TaskAction,
    TaskContextType
} from '../types/TaskContextTypes'



const initialValue = {
    tasks: [],
    dispatchTasks: () => {}
}
const reducer = (state: Tasks, action: TaskAction): Tasks => {
    const { type, payload } = action
    switch (type) {
        case 'add':
          return [
            ...state,
            payload
        ];
        case 'update':
          return state.map(
            task => task.id === payload.id 
                ? {
                    ...task,
                    ...payload,
                    date: new Date()
                }
                : task
        );
        case 'delete':
          return state.filter(task => task.id !== payload.id);
        case 'toggle':
          return  state.map(task => {
            if(task.id === payload.id) return {
                ...task,
                status: !task.status
            }

            return task
        });
        default:
          return [];
      }
}

const TasksContext = React.createContext<TaskContextType>(initialValue)

export const useTasks = () => useContext(TasksContext)

const TasksProvider = (props:TasksProviderPropsType ) => {
    const [tasks, dispatchTasks] = useReducer(reducer, [])

    return (    
        <TasksContext.Provider value={{
            tasks,
            dispatchTasks
        }}>
            {props.children}
        </TasksContext.Provider>
    )

}

export default TasksProvider