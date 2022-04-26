import { TextareaHTMLAttributes } from 'react'
import { TextAreaContainer } from '../styles'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function CustomTextarea({ children, ...rest }: TextAreaProps) {
    return <TextAreaContainer {...rest}>{children}</TextAreaContainer>
}
