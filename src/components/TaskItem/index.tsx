import React, { useMemo } from 'react'
import { Flex, Box } from '@chakra-ui/react'
import TaskDetails from '../TaskDetails'
import { DeleteIcon, CheckIcon, CloseIcon,  } from '@chakra-ui/icons'
import useTaskAction from '../../core/hooks/useTaskAction'
import { TaskItem as  TaskItemTypes} from '../../core/types/TaskTypes'
import { TYPE } from '../TaskDetails/index.types'

const checkDifferent = (prevProps:TaskItemTypes, nextProps:TaskItemTypes): boolean => {
    return (
        prevProps.status === nextProps.status
        && prevProps.title === nextProps.title
        && prevProps.description === nextProps.description
        && prevProps.id === nextProps.id
    )
}

const TaskItem= ( props: TaskItemTypes) => {
    const { toggleTask, deleteTask, updateTask } = useTaskAction()


    const element = useMemo(() => {        
        return (
                <Flex 
                    position="relative"
                    mt=".25em"
                    alignItems="center" 
                    justifyContent="center"
                    background={props.status ? "rgba(0,128,0,0.3)": "rgba(128,0,0,0.3)"}
                    borderRadius="16px">
                    <Flex 
                        onClick={() => toggleTask(props)}
                        as="div"
                        flex="2"
                        justifyContent="center"
                        alignItems="center"
                        maxWidth="50px"
                        height="50px"
                        marginX=".5em"
                        borderRadius="25px"
                        backgroundColor={props.status ? 'green' : 'red'}
                        >
                        {props.status ? <CheckIcon />: <CloseIcon />}
                    </Flex>
                    <Box
                        flex="8"
                        as="div"
                        width="100%"
                        alignItems="center"
                        padding=".25em">
                        <TaskDetails 
                            value={props.title}
                            onEdit={value => updateTask({
                                ...props,
                                title: value
                            })}
                            inputType={TYPE.INPUT}
                            borderBottom="1px solid green"
                            textAlign="center"
                            color="green"
                            fontWeight="700" 
                            fontSize="1.75em">
                                {props.title}
                        </TaskDetails>
                        
                        <TaskDetails
                            value={props.description}
                            onEdit={value => updateTask({
                                ...props,
                                description: value
                            })}
                            inputType={TYPE.TEXTAREA}
                            whiteSpace="pre-wrap"
                            minHeight="5em"
                            paddingX="0.5em"
                            marginTop=".5em"
                            fontStyle="italic"
                        >
                            {props.description}
                        </TaskDetails>
                        {/* <Text 
                            borderBottom="1px solid green"
                            textAlign="center"
                            color="yellow"
                            fontSize="1em">
                                {generateId()}
                        </Text> */}
                    </Box>
                    <Flex    
                        flex="1"
                        alignItems="flex-end"
                        >
                        <Flex 
                            as="div"
                            onClick={() => deleteTask(props)}
                            flex="2"
                            justifyContent="center"
                            alignItems="center"
                            maxWidth="40px"
                            height="40px"
                            marginX=".5em"
                            borderRadius="10px"
                            backgroundColor="grey"
                            >
                            <DeleteIcon />
                        </Flex>
                    </Flex>
                    <Box 
                        position="absolute" 
                        fontSize=".5em"
                        color="grey"
                        bottom="1em"
                        right="2em">
                        {props.date.toDateString()}
                    </Box>
                </Flex>
            )
    }, [deleteTask, props, toggleTask, updateTask])

    return element
}

export default React.memo(TaskItem, checkDifferent)
