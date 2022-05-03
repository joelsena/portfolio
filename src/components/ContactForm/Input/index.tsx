import { InputHTMLAttributes } from 'react'
import { InputContainer } from '../styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    isError?: boolean
}

export function CustomInput({ isError = false, ...rest }: InputProps) {
    return <InputContainer {...rest} isError={isError} />
}
