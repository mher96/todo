import React, { Fragment } from 'react'
import TaskItem from '../TaskItem'
import { useTasks } from '../../core/contexts/tasksContext'
import { useTasksOrder } from '../../core/contexts/optionsContext'
import { TaskOrderTypes } from '../../core/types/OptionContextTypes'

const TasksList = () => {
    const { tasks } = useTasks()
    const { sort } = useTasksOrder()

    return (
        <Fragment>
            {tasks
                .sort((t1, t2) => {
                    return sort === TaskOrderTypes.DATE 
                        ? t1.date.getTime() - t2.date.getTime()
                        : t1.status ? 1 : -1
                })
                .map(
                    task => <TaskItem 
                        key={`key-${task.id}`} 
                        id={task.id} title={task.title} 
                        description={task.description} 
                        date={task.date} 
                        status={task.status}/>
                )}
        </Fragment>
        )
}

export default TasksList