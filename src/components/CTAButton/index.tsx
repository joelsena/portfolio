import {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    MouseEventHandler,
    useRef
} from 'react'
import { isBuffer } from 'util'

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
    const handleScrollTo: MouseEventHandler<HTMLAnchorElement> = e => {
        if (window && e.target['href'].split('/').pop()[0] === '#') {
            const el = window.document.querySelector(
                e.target['href'].split('/').pop()
            )
            if (el) {
                const topPos =
                    el.getBoundingClientRect().top + window.pageYOffset

                window.scrollTo({
                    top: topPos,
                    behavior: 'smooth'
                })
            }
        }
    }

    if (as !== 'button')
        return (
            <ContainerAnchor
                {...rest}
                rel="noreferrer"
                onClick={e => handleScrollTo(e)}
            >
                {children}
            </ContainerAnchor>
        )
    return <Container {...rest}>{children}</Container>
}
