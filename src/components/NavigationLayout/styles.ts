import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
`

export const Sidebar = styled.div`
    background: var(--black_900);

    width: 7.25rem;
    height: 100%;
    padding: 1.5rem 0;

    position: fixed;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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
