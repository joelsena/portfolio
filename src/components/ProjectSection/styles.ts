import styled, { css } from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: fit-content;

    display: flex;

    @media (max-width: 920px) {
        padding: 1rem 2rem;
        /* height: 10rem; */
    }

    @media (max-width: 500px) {
        flex-direction: column;
    }
`

export const MidSection = styled.div<{
    contentType?: 'text' | 'preview-image'
}>`
    position: relative;
    /* width: 50%; */
    /* height: 100%; */

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
            padding: 3.5rem 3.5rem 0.5rem;
            width: 40%;

            @media (max-width: 1200px) {
                padding: 1.5rem;
            }

            @media (max-width: 920px) {
                width: 60%;
                padding: 1rem 1.5rem;
            }
            @media (max-width: 500px) {
                padding: 1rem 0;
            }
        `}

    ${props =>
        props.contentType === 'preview-image' &&
        css`
            width: 60%;

            @media (max-width: 920px) {
                width: 40%;
                > span {
                    /* border-radius: 1rem 0 0 1rem; */
                    border-radius: 1rem;
                }
            }
        `}

    @media (max-width: 1200px) {
        & > p {
            margin: 0.5rem 0;
        }
    }

    @media (max-width: 500px) {
        width: 100%;
        ${props =>
            props.contentType === 'preview-image' &&
            css`
                height: 8rem;
            `}
    }
`
