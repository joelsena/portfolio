import styled, { css } from 'styled-components'

export const Container = styled.div<{ isVisible: boolean }>`
    background: var(--black_900);

    width: 7.25rem;
    height: 100%;
    padding: 1.5rem 0;

    position: fixed;
    left: ${props => (!props.isVisible ? '-8rem' : 0)};
    /* left: 0; */

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    transition: 0.2s;
    z-index: 99;
`

export const MenuNavigation = styled.nav``

export const NavigationList = styled.li<{ isActive: boolean }>`
    position: relative;

    width: 100%;

    & > a {
        display: block;
        width: 100%;
        padding: 1rem;
        color: ${props => (!props.isActive ? 'var(--gray_600)' : 'white')};

        font-family: 'Arial', sans-serif;
        transition: 0.2s;

        :hover {
            color: white;
        }
    }

    &::after {
        z-index: 999;
        content: '';
        width: 4px;
        height: 2rem;
        margin: auto 0;

        opacity: ${props => (props.isActive ? 1 : 0)};

        background: linear-gradient(#02830b, #13ab1e);
        border-radius: 8px 0 0 8px;

        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;

        transition: 0.2s;
    }
`

export const OpenButton = styled.button<{ isSidebarOpen: boolean }>`
    background: var(--black_900);
    opacity: 0.8;
    border-radius: 0 0.4rem 0.4rem 0;
    padding: 0.25rem 0.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    left: -5rem;
    top: 2rem;

    width: 4rem;
    height: 3rem;

    transition: all 0.2s;
    z-index: 9999;

    & > div {
        width: 2rem;

        + span {
            margin-left: 1rem;
            display: flex;
        }
    }

    ${props =>
        props.isSidebarOpen &&
        css`
            transition: 0.2s;
            width: 7.25rem;
            padding: 0.8rem;
            opacity: 1;

            & > span {
                transform: rotateZ(3.142rad);
            }
        `}

    @media (max-width: 920px) {
        left: 0;
    }
`

export const SocialMedias = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    transition: 0.2s;

    & > a {
        width: 20px;

        + a {
            margin-left: 0.75rem;
        }

        :hover {
            color: white;
        }
    }
`
