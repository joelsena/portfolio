import styled, { css } from 'styled-components'

export const Container = styled.div`
    width: 100%;

    display: flex;
`

export const MidSection = styled.div<{
    contentType?: 'text' | 'preview-image'
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

        display: block;
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
            padding: 3.5rem;
            width: 40%;
        `}

    ${props =>
        props.contentType === 'preview-image' &&
        css`
            width: 60%;
        `}
`
