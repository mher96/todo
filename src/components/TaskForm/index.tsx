import React, { useCallback, useState } from 'react'
import { Flex, Input, Button, Textarea, Select, Box } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import generateId from '../../core/services/idGenerator'
import useTaskAction from '../../core/hooks/useTaskAction'
import { useTasksOrder } from '../../core/contexts/optionsContext'
import { TaskOrderTypes } from '../../core/types/OptionContextTypes'

const TaskForm = (props: any) => {
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const { addTask } = useTaskAction()
    const { setSort, sort } = useTasksOrder()

    const add = useCallback(() => {
        addTask({
            id: generateId(),
            title,
            description,
            status: false,
            date: new Date()
        })
        setDescription('')
        setTitle('')
    }, [addTask, description, title])
    
    return (
        <Flex 
            p="1em" 
            my="1em"
            overflow="hidden"
            background="grey"
            borderRadius="10px"
            justifyContent="space-around" 
            alignItems="center">
            <Button onClick={add}>
                <AddIcon />
            </Button>
            <Box mx="1em" >
                <Input 
                   
                    placeholder="Title"
                    
                    type="text" 
                    onChange={(e) => setTitle(e.target.value)} 
                    value={title}
                    />
                <Box>

                    <Select 
                        size="sm" 
                        marginTop=".5em" 
                        onChange={e =>e.target.value === "DATE" ? setSort(TaskOrderTypes.DATE) : setSort(TaskOrderTypes.STATUS) } 
                        value={sort}>
                        <option value={TaskOrderTypes.DATE}>Date</option>
                        <option value={TaskOrderTypes.STATUS}>Status</option>
                    </Select>
                </Box>
            </Box>
            <Textarea 
                flex="2"
                placeholder="Description..."
                type="tex" 
                height="inherit"
                onChange={(e) => setDescription(e.target.value)} 
                value={description}
                />  
        </Flex>
    )
}

export default TaskForm

export {}