import React, { useState } from 'react'
import { Box, Input, Button, Textarea } from '@chakra-ui/react'
import { useTasks } from '../../core/contexts/tasksContext'
import generateId from '../../core/services/idGenerator'

const TaskForm = (props: any) => {
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const { add, toggle } = useTasks()
    const addTask = (): void => {
        const taskData = {
            id: generateId(),
            title,
            description,
            status: false,
            toggle 
        }

        add(taskData)
    }
    
    return (
        <Box>
            <Input 
                type="text" 
                onChange={(e) => setTitle(e.target.value)} 
                value={title}
                />
            <Textarea 
                type="tex" 
                onChange={(e) => setDescription(e.target.value)} 
                value={description}
                />  
            <Button onClick={addTask}>
                Add
            </Button>
        </Box>
    )
}

export default TaskForm