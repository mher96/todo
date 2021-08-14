import React, { useMemo } from 'react'
import { Flex, Text, Box } from '@chakra-ui/react'
import { useTasks } from '../../core/contexts/tasksContext'
import { TaskItem as  TaskItemTypes} from '../../core/types/TaskTypes'
const checkDifferent = (prevProps:TaskItemTypes, nextProps:TaskItemTypes): boolean => {
    return (
        prevProps.status === nextProps.status
    )
}



const TaskItem= ( props: TaskItemTypes) => {
    const { toggle } = useTasks()


    return (
            <Flex 
                onClick={() => toggle(props.id)}
                mt=".25em"
                alignItems="center" 
                justifyContent="center"
                borderBottom="1px solid black">
                <Box 
                    as="div"
                    width="50px"
                    height="50px"
                    marginX=".5em"
                    backgroundColor={props.status ? 'green' : 'red'}
                >
                </Box>
                <Box
    
                    as="div"
                    width="100%"
                    alignItems="center"
                    padding=".25em">
                    <Text 
                        borderBottom="1px solid green"
                        textAlign="center"
                        color="green"
                        fontWeight="700" 
                        fontSize="1.5em">
                            {props.title}
                    </Text>
                    <Text
                        height="3em"
                        paddingX="0.5em"
                        marginTop=".25em"
                        fontStyle="italic"
                    >
                        {props.description}
                            {/* Description Description Description Description Description  */}
                    </Text>
                </Box>
            </Flex>
        )
}

// export default TaskItem
export default React.memo(TaskItem, checkDifferent)