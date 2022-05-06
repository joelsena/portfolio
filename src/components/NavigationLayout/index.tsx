import { ReactNode } from 'react'

import { Sidebar } from './Sidebar'

import { Container } from './styles'
interface PageProps {
    children: ReactNode
}

export function NavigationLayout({ children }: PageProps) {
    return (
        <Container>
            <Sidebar />
            {children}
        </Container>
    )
}
