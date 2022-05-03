import styled, { css } from 'styled-components'

export const Container = styled.form`
    width: 100%;

    & > input {
        margin-top: 1rem;
    }

    & > textarea {
        margin-top: 1rem;
        resize: none;
    }

    padding: 1rem;
`

export const InputContainer = styled.input<{ isError?: boolean }>`
    width: 100%;
    color: var(--gray_600);

    background: var(--black_600);
    border-radius: 0.25rem;
    border: 2px solid var(--black_600);

    padding: 0.75rem;
    transition: 0.2s;

    ::placeholder {
        color: var(--gray_600);
    }

    ${props =>
        props.isError &&
        css`
            border-color: var(--wine_500);
        `}
`

export const InputGroup = styled.div`
    width: 100%;
    display: flex;

    & > input + input {
        margin-left: 1rem;
    }
`

export const TextAreaContainer = styled.textarea<{ isError?: boolean }>`
    width: 100%;
    color: var(--gray_600);

    background: var(--black_600);
    border-radius: 0.25rem;
    border: 2px solid var(--black_600);

    padding: 0.75rem;

    ::placeholder {
        color: var(--gray_600);
    }

    ${props =>
        props.isError &&
        css`
            border-color: var(--wine_500);
        `}
`
