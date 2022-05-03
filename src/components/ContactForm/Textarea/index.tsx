import { TextareaHTMLAttributes } from 'react'
import { TextAreaContainer } from '../styles'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    isError?: boolean
}

export function CustomTextarea({ children, isError, ...rest }: TextAreaProps) {
    return (
        <TextAreaContainer {...rest} isError={isError}>
            {children}
        </TextAreaContainer>
    )
}
