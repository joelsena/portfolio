import { CSSProperties } from 'styled-components'
import { Container } from './styles'

interface YearBadgeProps {
    year: number
    style?: CSSProperties
}

export function YearBadge({ year, style }: YearBadgeProps) {
    return <Container style={style}>{year}</Container>
}
