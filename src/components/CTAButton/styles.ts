import styled, { css } from 'styled-components'

type buttonProps = {
    styleType?: 'filled' | 'empty'
}

const buttonClickAnimation = css`
    :active {
        transform: scale(0.9, 0.9);
    }
`

const ButtonStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: min(196px, 100%);
    /* min-width: 196px; */
    padding: 1rem 2rem;

    border: 2px solid var(--wine_500);
    border-radius: 0.625rem;

    color: var(--wine_500);

    position: relative;
    overflow: hidden;

    transition: all 0.2s;

    &::before {
        z-index: -1;
        content: '';
        position: absolute;
        top: 0;
        left: 0;

        width: 0;
        height: 50%;

        background-color: var(--wine_500);

        transition: all 0.3s;
    }

    &::after {
        z-index: -1;
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;

        width: 0;
        height: 50%;

        background-color: var(--wine_500);

        transition: all 0.4s;
    }

    &:hover {
        &::before {
            width: 100%;
        }
        &::after {
            width: 100%;
        }

        color: var(--black_800);
    }

    @media (max-width: 500px) {
        padding: 1rem;
    }
`

export const Container = styled.button<buttonProps>`
    ${ButtonStyle}

    ${buttonClickAnimation}

    ${props =>
        props.styleType === 'filled' &&
        css`
            background: var(--wine_500) !important;
            color: var(--black_900) !important;
        `}
`

export const ContainerAnchor = styled.a<buttonProps>`
    ${ButtonStyle}

    ${buttonClickAnimation}
    width: min(196px, 100%);

    ${props =>
        props.styleType === 'filled' &&
        css`
            background: var(--wine_500) !important;
            color: var(--black_900) !important;
        `}
`
