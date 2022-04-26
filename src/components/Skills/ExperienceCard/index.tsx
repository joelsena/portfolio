import { Card } from '../styles'

interface CardProps {
    workTitle: string
    duration: string
    company: string
    description: string
}

export function ExperienceCard({
    workTitle,
    duration,
    company,
    description
}: CardProps) {
    return (
        <Card>
            <h3>{workTitle}</h3>
            <div>
                <p>{company}</p>
                <small>{duration}</small>
            </div>

            <small>{description}</small>
        </Card>
    )
}
