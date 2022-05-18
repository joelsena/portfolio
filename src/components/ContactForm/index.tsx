import { ChangeEventHandler, FormEvent, useState } from 'react'
import axios from 'axios'

import { Container, InputGroup } from './styles'
import { CustomInput } from './Input'
import { CTAButton } from '../CTAButton'
import { CustomTextarea } from './Textarea'

type ErrorType = {
    [name: string]: boolean
}

type ContactFormData = {
    name: string
    email: string
    messageTitle: string
    message: string
}

function getInputErrors(data: ContactFormData) {
    return Object.keys(data).map(key => {
        if (!data[key].value) {
            return { [key]: true }
        }
    })
}

// TODO: Validação e manipulação dos inputs
export function ContactForm() {
    const [data, setData] = useState<ContactFormData>({
        name: '',
        email: '',
        messageTitle: '',
        message: ''
    })
    const [inputError, setInputError] = useState<ErrorType>({
        name: false,
        email: false,
        messageTitle: false,
        message: false
    })
    const [isLoading, setIsLoading] = useState(false)

    const { name, email, messageTitle, message } = data

    async function onSubmitHandler(e: FormEvent) {
        e.preventDefault()

        try {
            checkInputErrors(data)
            // no-errors

            setIsLoading(true)
            const { email, message, messageTitle, name } = data
            const res = await axios.post('/api/send-email', {
                subject: messageTitle,
                text: message,
                userName: name,
                userEmail: email
            })

            alert('Email enviado com sucesso!!!')
        } catch (err) {
            console.error(err)
            alert(
                'Infelizmente não conseguimos enviar o email. Tente novamente mais tarde.'
            )
        } finally {
            setIsLoading(false)
        }
    }

    function checkInputErrors(contactData: ContactFormData) {
        let aux = {}
        let isError = false
        Object.keys(contactData).forEach(k => {
            aux = { ...aux, [k]: !contactData[k] ? true : false }
            isError = !contactData[k] && true
        })

        setInputError(aux)
        if (isError) throw Error('Input Validation Error')
    }

    const handleInputChange: ChangeEventHandler<
        HTMLInputElement & HTMLTextAreaElement
    > = ({ target }) => {
        setData(prev => {
            setInputError(prevError => ({
                ...prevError,
                [target.name]: !target.value ? true : false
            }))
            return {
                ...prev,
                [target.name]: target.value
            }
        })
    }

    return (
        <Container onSubmit={onSubmitHandler}>
            <InputGroup>
                <CustomInput
                    name="name"
                    type="text"
                    placeholder="Nome"
                    onChange={handleInputChange}
                    isError={inputError['name']}
                    value={name}
                />
                <CustomInput
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleInputChange}
                    isError={inputError['email']}
                    value={email}
                />
            </InputGroup>

            <CustomInput
                name="messageTitle"
                type="text"
                placeholder="Título da mensagem"
                onChange={handleInputChange}
                isError={inputError['messageTitle']}
                value={messageTitle}
            />

            <CustomTextarea
                name="message"
                rows={8}
                cols={10}
                minLength={100}
                maxLength={1000}
                placeholder="Mensagem"
                onChange={handleInputChange}
                isError={inputError['message']}
                value={message}
            />

            <CTAButton
                type="submit"
                style={{ marginTop: '1rem', float: 'right' }}
            >
                {isLoading ? 'Carregando...' : 'Enviar'}
            </CTAButton>
        </Container>
    )
}
