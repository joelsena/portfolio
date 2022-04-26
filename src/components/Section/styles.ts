import styled, { css } from 'styled-components'

export const Container = styled.section`
    padding: 2rem 3rem;

    display: flex;
`

export const MidSection = styled.div<{ titleColor?: 'wine' | 'white' }>`
    width: 50%;

    & > p {
        padding: 0 1rem;

        + p {
            margin-top: 1rem;
        }
    }

    & > h1 {
        color: ${props =>
            props.titleColor === 'white' ? `white` : `var(--wine_500)`};
    }
`
