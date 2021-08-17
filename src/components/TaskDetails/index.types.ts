import { TextProps } from "@chakra-ui/layout"

export enum TYPE {
    INPUT = 'INPUT',
    TEXTAREA = 'TEXTAREA',
}

export type TaskDetailsProps = TextProps & {
    inputType: TYPE;
    value: string;
    onEdit: (value: string) => void
}