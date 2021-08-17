import React from 'react'
import { Box } from '@chakra-ui/layout'
import TasksList from '../TasksList'
import TaskForm from '../TaskForm'

const Main = () => {
    return(
        <Box maxWidth="540px" margin="0 auto">
            <TaskForm />
            <TasksList />
        </Box>
    )
}

export default Main