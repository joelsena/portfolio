import styled from 'styled-components'

export const Container = styled.div`
    padding-top: 2rem;
`

export const CardContainer = styled.div`
    width: 100%;
    margin-top: 3rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
`

export const Card = styled.div`
    background: var(--black_600);
    border-radius: 0.25rem;

    padding: 1rem;

    & > h3 {
        font-family: 'Inter', sans-serif;
        margin-bottom: 0.2rem;
    }

    & > small {
        display: block;
        margin-top: 0.5rem;
    }

    small {
        color: var(--gray_400);
    }
`

export const LevelBarContainer = styled.div`
    width: 100%;

    h3 {
        font-family: 'Inter', sans-serif;
    }

    margin: 1rem 0;

    & > div {
        + div {
            margin-top: 1rem;
        }
    }
`

export const LevelProgressBar = styled.div<{
    progress?: number
    barColor?: 'green_600' | 'wine_500'
}>`
    width: 100%;
    height: 2px;

    background: var(--black_600);
    margin-top: 0.75rem;

    position: relative;

    &::after {
        content: '';
        z-index: 22;
        position: absolute;
        bottom: 0;
        left: 0;

        width: ${props => props.progress}%;
        height: 2px;
        background: ${props => `var(--${props.barColor})`};
    }
`
