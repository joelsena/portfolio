import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

    padding: 2rem 0;
`

export const Section = styled.section`
    padding: 2rem 3rem;

    display: flex;
`

export const PortSection = styled.section`
    padding: 2rem 3rem 0;

    display: flex;

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
    }
`

export const PreviewProject = styled.div`
    width: 100%;

    display: flex;
`

export const PreviewMidSection = styled.div`
    /* width: 50%; */
    height: 100%;

    small {
        color: var(--gray_600);
        font-family: Arial, sans-serif;
    }

    & > p {
        margin: 1rem 0;
    }

    & > h2 {
        font-size: 1.5rem;
    }

    & > div {
        display: flex;
        /* justify-content: center; */
        align-items: center;
    }
`

export const MidSection = styled.div`
    width: 50%;
`
