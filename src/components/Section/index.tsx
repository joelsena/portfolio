import { ReactNode } from 'react'
import Image from 'next/image'

import { Container, MidSection } from './styles'
import { Tags } from '../Tags'
import { CTAButton } from '../CTAButton'

type titleJSX = {
    pre: string
    pos: string
    content: ReactNode
}

type sectionData = {
    titles: (string | titleJSX)[]
    texts: string[]
    buttonText?: string
}

interface PageProps {
    children?: ReactNode
    section: sectionData
    titleColor?: 'wine' | 'white'
}

export function Section({ children, section, titleColor = 'wine' }: PageProps) {
    const { titles, texts, buttonText } = section

    return (
        <Container>
            <MidSection style={{ marginTop: '3rem' }} titleColor={titleColor}>
                <Tags tags={[{ content: '<h1>' }]} />
                {titles.map((title, i) => {
                    if (title['content'])
                        return (
                            <h1 key={i}>
                                {title['pre']}
                                {title['content']}
                                {title['pos']}
                            </h1>
                        )
                    return <h1 key={i}>{title as string}</h1>
                })}
                <Tags tags={[{ content: '</h1>' }]} />

                <Tags tags={[{ content: '<p>' }]} />
                {texts.map((text, i) => (
                    <p key={i}>{text}</p>
                ))}
                <Tags tags={[{ content: '</p>' }]} />

                {buttonText && (
                    <CTAButton style={{ marginTop: '2rem' }}>
                        {buttonText}
                    </CTAButton>
                )}
            </MidSection>

            {children && <MidSection>{children}</MidSection>}
        </Container>
    )
}
