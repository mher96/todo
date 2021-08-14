import React, { Fragment, useEffect, useState } from 'react'
import TaskItem from '../TaskItem'
import { useTasks } from '../../core/contexts/tasksContext'

const TasksList = () => {
    const { tasks } = useTasks()
    // const [tasks, setTasks] = useState([
    //     {
    //         id: '1',
    //         title: '1',
    //         description: 'd1',
    //         status: false
    //     },
    //     {
    //         id: '2',
    //         title: '2',
    //         description: 'dçASDasd2',
    //         status: true
    //     },
    //     {
    //         id: '3',
    //         title: '3',
    //         description: 'dasdasDAsd1',
    //         status: false
    //     },
    // ])

    // useEffect(() => {
    //     setTimeout(() => setTasks(tasks.map(task => task.id === '1' ? {...task, status: true} : task)), 1000)
    // }, [])


    return (
        <Fragment>
            {tasks.map(
                task => <TaskItem 
                    key={`key-${task.id}`} 
                    id={task.id} title={task.title} 
                    description={task.description} 
                    status={task.status}/>
              )}
        </Fragment>
        )
}

export default TasksList