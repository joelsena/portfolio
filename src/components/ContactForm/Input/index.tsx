import { InputHTMLAttributes } from 'react'
import { InputContainer } from '../styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function CustomInput({ ...rest }: InputProps) {
    return <InputContainer {...rest} />
}
