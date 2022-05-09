import styled, { css } from 'styled-components'

export const Container = styled.section`
    padding: 2rem 3rem;

    display: flex;
    position: relative;

    @media (max-width: 500px) {
        padding: 2rem;
    }
`

export const MidSection = styled.div`
    width: 50%;

    & > p {
        padding-left: 1rem;

        + p {
            margin-top: 1rem;
        }
    }
`

export const TitlesContainer = styled.div`
    display: flex;

    @media (max-width: 500px) {
        word-wrap: break-word;
    }
`

type TitleType = {
    hero?: boolean
    delay: number
    titleColor?: 'wine' | 'white'
}

export const H1 = styled.h1<TitleType>`
    position: relative;

    ${props =>
        props.hero &&
        css`
            animation: 0.3s init ${props.delay}s;
            animation-fill-mode: both;
        `}

    color: ${props =>
        props.titleColor === 'white' ? `white` : `var(--wine_500)`};

    @keyframes init {
        from {
            bottom: 24px;
            opacity: 0;
        }
        to {
            bottom: 0;
            opacity: 1;
        }
    }

    @media (max-width: 500px) {
        font-size: 3rem;
        > span {
            width: 32px !important;
        }
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

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
        /* grid-gap: 1rem; */
    }
`
