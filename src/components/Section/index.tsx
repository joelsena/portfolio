import { HTMLAttributes, ReactNode, useEffect, useState } from 'react'

import {
    Container,
    MidSection,
    ButtonGroup,
    TitlesContainer,
    H1
} from './styles'
import { useDataContext } from '../../context'
import { CTAButton } from '../CTAButton'
import { Tags } from '../Tags'

type titleJSX = {
    pre: string
    pos: string
    content: ReactNode
}

type sectionData = {
    titles: (string | titleJSX)[]
    texts: string[]
}

interface PageProps extends HTMLAttributes<HTMLElement> {
    children?: ReactNode
    section: sectionData
    titleColor?: 'wine' | 'white'
    additionalContent?: (props: any) => JSX.Element
    buttons?: {
        as?: 'a' | 'button'
        text: string
        cHref?: string
        styleType?: 'filled' | 'empty'
    }[]
}

export function Section({
    children,
    section,
    titleColor = 'wine',
    buttons = [],
    additionalContent: AddContent,
    ...rest
}: PageProps) {
    const { titles, texts } = section

    const [showMidSection, setShowMidSection] = useState(true)
    const { windowSize, breakpoints } = useDataContext()

    useEffect(() => {
        if (windowSize <= breakpoints.lg) setShowMidSection(false)
        else setShowMidSection(true)
    }, [windowSize, breakpoints])

    return (
        <Container {...rest}>
            <MidSection
                style={{
                    marginTop: '3rem',
                    width: showMidSection ? '50%' : '100%'
                }}
                titleColor={titleColor}
            >
                <Tags tags={[{ content: '<h1>' }]} />
                {titles.map((title, i) => {
                    if (title['content']) {
                        const words = []
                        for (let i = 0; i < (title as string).length; i++) {
                            // if(title[i] === ' ') words.push()
                            words.push(title[i])
                        }
                        return (
                            <h1 key={i}>
                                {title['pre']}
                                {title['content']}
                                {title['pos']}
                            </h1>
                        )
                    }
                    const words = []
                    for (let i = 0; i < (title as string).length; i++) {
                        // if(title[i] === ' ') words.push()
                        words.push(title[i])
                    }
                    return (
                        <TitlesContainer key={i}>
                            {words.map((word, wi) => (
                                <H1 key={i * 2} delay={wi / 8}>
                                    {word !== ' ' ? word : '\xa0'}
                                </H1>
                            ))}
                        </TitlesContainer>
                    )
                })}

                <Tags tags={[{ content: '</h1>' }]} />

                <Tags tags={[{ content: '<p>' }]} />
                {texts.map((text, i) => (
                    <p key={i}>{text}</p>
                ))}
                <Tags tags={[{ content: '</p>' }]} />

                {buttons.length !== 0 && (
                    <ButtonGroup style={{ marginTop: '1.5rem' }}>
                        {buttons.map((button, i) => (
                            <CTAButton
                                key={i}
                                as={button.as}
                                href={button.cHref || ''}
                                styleType={button.styleType}
                                target={
                                    button.cHref.startsWith('#')
                                        ? '_self'
                                        : '_blank'
                                }
                            >
                                {button.text}
                            </CTAButton>
                        ))}
                    </ButtonGroup>
                )}

                {AddContent && <AddContent />}
            </MidSection>

            {children && showMidSection && <MidSection>{children}</MidSection>}
        </Container>
    )
}
