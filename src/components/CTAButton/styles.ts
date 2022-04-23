import styled from 'styled-components'

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: min(196px, 100%);
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
`

export const ContainerAnchor = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    width: min(196px, 100%);
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
`
