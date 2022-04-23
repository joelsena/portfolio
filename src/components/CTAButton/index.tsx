import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import { Container, ContainerAnchor } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    as?: 'a' | 'button'
}

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export function CTAButton({
    children,
    as = 'button',
    ...rest
}: ButtonProps & AnchorProps) {
    if (as !== 'button')
        return <ContainerAnchor {...rest}>{children}</ContainerAnchor>
    return <Container {...rest}>{children}</Container>
}
