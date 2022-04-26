import { ReactNode } from 'react'

import { LevelBarContainer, LevelProgressBar } from '../styles'

interface LevelBarProps {
    progress?: number
    title: string
    barColor?: 'green_600' | 'wine_500'
}

export function LevelBar({
    progress = 0,
    title,
    barColor = 'wine_500'
}: LevelBarProps) {
    return (
        <div>
            <h3>{title}</h3>
            <LevelProgressBar progress={progress} barColor={barColor} />
        </div>
    )
}
