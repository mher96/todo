import React, { 
    useContext, 
    useState,
} from 'react'
import { TaskOrderTypes, TaskContextType, TasksOptionProviderPropsType } from '../types/OptionContextTypes'

const initialState = {
    sort: TaskOrderTypes.DATE,
    setSort: () => {}
}

const TaskSortContext = React.createContext<TaskContextType>(initialState)

export const useTasksOrder = () => useContext(TaskSortContext)

const TasksOptionProvider = (props:TasksOptionProviderPropsType ) => {
    const [sort, setSort] = useState(TaskOrderTypes.DATE)

    return (    
        <TaskSortContext.Provider value={{
            sort,
            setSort
        }}>
            {props.children}
        </TaskSortContext.Provider>
    )

}

export default TasksOptionProvider