import {
    ClassAttributes,
    Component,
    HTMLAttributes,
    LegacyRef,
    ReactNode,
    Ref
} from 'react'
import Image, { StaticImageData } from 'next/image'

import { Container, MidSection } from './styles'
import { CTAButton } from '../CTAButton'
import { YearBadge } from '../YearBadge'
import { useDataContext } from '../../context'
import { ImageUtils } from 'three'

type previewData = {
    image: {
        preview: StaticImageData
        normal: StaticImageData
    }
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
    ref?: Ref<HTMLDivElement>
}

export function ProjectSection({
    children,
    data,
    inverted = false
}: PageProps) {
    const { windowSize } = useDataContext()
    const {
        image,
        title,
        year,
        description,
        designedByWho = 'Design feito por mim.',
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
                        style={{ marginTop: '1.5rem' }}
                    >
                        Visitar Site
                    </CTAButton>
                </MidSection>

                <MidSection contentType="preview-image">
                    <Image
                        src={windowSize <= 500 ? image.normal : image.preview}
                        alt={title}
                        layout={windowSize <= 920 ? 'fill' : 'responsive'}
                        objectFit={windowSize <= 920 ? 'cover' : 'initial'}
                        placeholder="blur"
                        quality={100}
                    />
                </MidSection>
            </Container>
        )
    }

    return (
        <Container>
            <MidSection contentType="preview-image">
                <Image
                    src={windowSize <= 500 ? image.normal : image.preview}
                    alt={title}
                    layout={windowSize <= 920 ? 'fill' : 'responsive'}
                    objectFit={windowSize <= 920 ? 'cover' : 'initial'}
                    placeholder="blur"
                    quality={100}
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
                    style={{ marginTop: '1.5rem' }}
                >
                    Visitar Site
                </CTAButton>
            </MidSection>
        </Container>
    )
}
