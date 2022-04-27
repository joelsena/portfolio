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

export const ButtonGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 196px);
    grid-gap: 1rem;

    /* grid-template-columns: repeat(auto-fit, minmax(224px, 1fr)); */

    /* display: flex;
    & > button + button {
        margin-left: 1rem;
    } */
`
