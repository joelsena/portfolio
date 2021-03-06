import styled, { css } from 'styled-components'

export const Container = styled.div`
    width: 100%;

    padding: 2rem 0;
    padding-left: 7.25rem;

    @media (max-width: 920px) {
        padding-left: 0;
    }
`

export const PortSection = styled.section`
    padding: 2rem 3rem 0;

    display: flex;
    flex-direction: column;

    h1 {
        color: var(--wine_500);
    }

    position: relative;

    &::after {
        z-index: -1;
        content: 'Trabalho';

        font-size: 10rem;
        font-family: 'Inter', sans-serif;
        font-weight: 800;
        color: var(--black_600);

        position: absolute;
        bottom: -40px;
        right: 0;

        @media (max-width: 500px) {
            font-size: 5rem;
            /* right: -1rem; */
        }
    }

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

export const ArrowIndicator = styled.span`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    top: 90%;
    width: 1rem;

    animation: move 1s infinite alternate;

    @keyframes move {
        from {
            transform: translateY(-8px);
        }
        to {
            transform: translateY(20px);
        }
    }
`

export const Copy = styled.p`
    width: 100%;
    text-align: center;
`
