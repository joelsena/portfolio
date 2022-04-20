import { ReactNode } from 'react'
import Image from 'next/image'

import { Container, Sidebar } from './styles'
import JSLogo from '../../assets/logos/logo.svg'

interface PageProps {
    children: ReactNode
}

export function NavigationLayout({ children }: PageProps) {
    return (
        <Container>
            <Sidebar>
                <Image src={JSLogo} alt="JS" width="100%" />
            </Sidebar>
            {children}
        </Container>
    )
}
