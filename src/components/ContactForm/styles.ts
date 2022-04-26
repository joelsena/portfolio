import styled from 'styled-components'

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

export const InputContainer = styled.input`
    width: 100%;
    color: var(--gray_600);

    background: var(--black_600);
    border-radius: 0.25rem;

    padding: 0.75rem;

    ::placeholder {
        color: var(--gray_600);
    }
`

export const InputGroup = styled.div`
    width: 100%;
    display: flex;

    & > input + input {
        margin-left: 1rem;
    }
`

export const TextAreaContainer = styled.textarea`
    width: 100%;
    color: var(--gray_600);

    background: var(--black_600);
    border-radius: 0.25rem;

    padding: 0.75rem;

    ::placeholder {
        color: var(--gray_600);
    }
`
