import React, { Fragment, useCallback, useState, useRef, useEffect } from 'react'
import { Input, Text, Textarea, Box } from '@chakra-ui/react'
import { TYPE, TaskDetailsProps } from './index.types'



const TaskDetails = (props: TaskDetailsProps) => {
    const {value, inputType, onEdit, ...textProps } = props
    const [editable, setEditable] = useState(false)
    const [editingValue, setEditingValue] = useState(props.value)
    const inputRef = useRef<HTMLInputElement>(null)
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    const onBlur = useCallback((e) => {
        onEdit(editingValue)
        setEditable(false)
    }, [editingValue, onEdit])


    useEffect(() => {
        inputRef.current && inputRef.current.focus()
        textareaRef.current && textareaRef.current.focus()
    }, [editable])

    const content = editable 
        ? (
            <Fragment>
                {inputType === TYPE.INPUT
                    ? <Input 
                        ref={inputRef}
                        fontSize="1.5em"
                        onBlur={onBlur}
                        value={editingValue}
                        onChange={(e) => setEditingValue(e.target.value)}/> 
                    : <Textarea
                        ref={textareaRef}
                        fontSize="1em"
                        onBlur={onBlur}
                        value={editingValue}
                        onChange={(e) => setEditingValue(e.target.value)}/>}
            </Fragment>
        ) : (
            <Fragment>
                <Text 
                    {...textProps}>
                        {props.value}
                </Text>
            </Fragment>
        )

    return (
        <Box onClick={() =>setEditable(true)}>
            {content}
        </Box>
    )

}


export default TaskDetails

export {}