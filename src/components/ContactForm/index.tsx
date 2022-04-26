import { FormEvent } from 'react'

import { Container, InputGroup } from './styles'
import { CustomInput } from './Input'
import { CTAButton } from '../CTAButton'
import { Tags } from '../Tags'
import { CustomTextarea } from './Textarea'

// TODO: Validação e manipulação dos inputs
export function ContactForm() {
    function onSubmitHandler(e: FormEvent) {
        e.preventDefault()
    }

    return (
        <Container onSubmit={onSubmitHandler}>
            <InputGroup>
                <CustomInput name="name" type="text" placeholder="Nome" />
                <CustomInput name="email" type="email" placeholder="Email" />
            </InputGroup>

            <CustomInput
                name="messageTitle"
                type="text"
                placeholder="Título da mensagem"
            />

            <CustomTextarea
                rows={8}
                cols={10}
                minLength={100}
                maxLength={1000}
                placeholder="Mensagem"
            />

            <CTAButton
                type="submit"
                style={{ marginTop: '1rem', float: 'right' }}
            >
                Enviar Mensagem!
            </CTAButton>
        </Container>
    )
}
