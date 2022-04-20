import styled from 'styled-components'

type TagProps = {
    tabHier?: 'first' | 'second' | 'third'
}

const space = {
    first: 0,
    second: 1,
    third: 2
}

export const Container = styled.div`
    width: 100%;

    padding: 2rem 0;
`

export const Section = styled.section`
    padding: 2rem;

    display: flex;
`

export const MidSection = styled.div`
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const TagsContainer = styled.div`
    padding: 0 1rem;
`

export const Tags = styled.span<TagProps>`
    display: block;
    padding-left: ${props => space[props.tabHier || 'first']}rem;

    font-family: 'Indie Flower', cursive;

    color: var(--gray_900);
`
