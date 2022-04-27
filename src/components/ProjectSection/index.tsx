import { ReactNode } from 'react'
import Image, { StaticImageData } from 'next/image'

import { Container, MidSection } from './styles'
import { CTAButton } from '../CTAButton'
import { YearBadge } from '../YearBadge'

type previewData = {
    image: StaticImageData
    title: string
    year: number
    description: string
    designedByWho?: string
    accessLink: string
}

interface PageProps {
    children?: ReactNode
    data: previewData
    inverted?: boolean
}

export function ProjectSection({
    children,
    data,
    inverted = false
}: PageProps) {
    const {
        image,
        title,
        year,
        description,
        designedByWho = 'Desing feito por mim.',
        accessLink
    } = data

    if (inverted) {
        return (
            <Container>
                <MidSection contentType="text">
                    <div>
                        <h2>{title}</h2>
                        <YearBadge style={{ marginLeft: '1rem' }} year={year} />
                    </div>

                    <p>{description}</p>
                    <small>{designedByWho}</small>

                    <CTAButton
                        as="a"
                        target="_blank"
                        href={accessLink}
                        style={{ marginTop: '2rem' }}
                    >
                        Visitar Site
                    </CTAButton>
                </MidSection>

                <MidSection contentType="preview-image">
                    <Image
                        src={image}
                        alt={title}
                        layout="responsive"
                        placeholder="blur"
                    />
                </MidSection>
            </Container>
        )
    }

    return (
        <Container>
            <MidSection contentType="preview-image">
                <Image
                    src={image}
                    alt={title}
                    layout="responsive"
                    placeholder="blur"
                />
            </MidSection>
            <MidSection contentType="text">
                <div>
                    <h2>{title}</h2>
                    <YearBadge style={{ marginLeft: '1rem' }} year={year} />
                </div>

                <p>{description}</p>
                <small>{designedByWho}</small>

                <CTAButton
                    as="a"
                    href={accessLink}
                    target="_blank"
                    style={{ marginTop: '2rem' }}
                >
                    Visitar Site
                </CTAButton>
            </MidSection>
        </Container>
    )
}
