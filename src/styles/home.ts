import styled, { css } from 'styled-components'

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

export const PreviewMidSection = styled.div<{
    contentType?: 'text-inverted' | 'preview-image' | 'text'
}>`
    /* width: 50%; */
    height: 100%;

    & > div {
        display: flex;
        /* justify-content: center; */
        align-items: center;
    }

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

    ${props =>
        props.contentType === 'text' &&
        css`
            width: 40%;
        `}

    ${props =>
        props.contentType === 'text-inverted' &&
        css`
            width: 40%;
        `}

    ${props =>
        props.contentType === 'preview-image' &&
        css`
            width: 60%;
        `}

    ${props =>
        (props.contentType === 'text-inverted' ||
            props.contentType === 'text') &&
        css`
            padding: 3.5rem;
        `}
`

export const MidSection = styled.div`
    width: 50%;
`
