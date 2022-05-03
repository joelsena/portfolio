import { HTMLAttributes, ReactNode } from 'react'

import { Container, MidSection, ButtonGroup } from './styles'
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

    return (
        <Container {...rest}>
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

                {buttons.length !== 0 && (
                    <ButtonGroup>
                        {buttons.map((button, i) => (
                            <CTAButton
                                key={i}
                                as={button.as}
                                href={button.cHref || ''}
                                style={{ marginTop: '2rem' }}
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

            {children && <MidSection>{children}</MidSection>}
        </Container>
    )
}
