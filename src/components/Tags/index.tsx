import { Container, TagsElement } from './styles'

export type TagHierarchy = 'first' | 'second' | 'third'

type Tag = {
    content: string
    hierarchy?: TagHierarchy
}

interface TagsProps {
    tags: Tag[]
    wrapPad?: boolean
}


export function Tags({ tags, wrapPad=false }: TagsProps) {

    return(
        <Container  wrapPad={wrapPad}>
            {tags.map((tag, i) => (
                <TagsElement key={i} tabHierarchy={tag.hierarchy} >
                    {tag.content}
                </TagsElement>
            ))}
        </Container>
    )
}
