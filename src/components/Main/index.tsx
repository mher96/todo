import React, { Fragment } from 'react'
import TasksList from '../TasksList'
import TaskForm from '../TaskForm'

const Main = () => {
    return(
        <Fragment>
            <TasksList />
            <TaskForm />
        </Fragment>
    )
}

export default Main