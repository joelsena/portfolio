import styled from 'styled-components'

import { TagHierarchy } from './'

type ContainerProps = {
    wrapPad: boolean
}

type TagProps = {
    tabHierarchy?: TagHierarchy
}

const space = {
    first: 0,
    second: 1,
    third: 2
}

export const Container = styled.div<ContainerProps>`
    padding: 0 ${props => (props.wrapPad ? 1 : 0)}rem;
`

export const TagsElement = styled.span<TagProps>`
    display: block;
    padding-left: ${props => space[props.tabHierarchy || 'first']}rem;

    font-family: 'Indie Flower', cursive;

    color: var(--gray_900);
`
