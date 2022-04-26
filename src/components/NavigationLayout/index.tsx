import { ReactNode, useState } from 'react'
import Image from 'next/image'

import {
    Container,
    Sidebar,
    MenuNavigation,
    SocialMedias,
    NavigationList
} from './styles'

import JSLogo from '../../assets/logos/logo.svg'
import Github from '../../assets/icons/github.svg'
import Instagram from '../../assets/icons/instagram.svg'
import Linkedin from '../../assets/icons/linkedin-rect.svg'

interface PageProps {
    children: ReactNode
}

export type NavOptions = {
    name: string
    linkTag: string
    isActive: boolean
}

const initialNavOptions: NavOptions[] = [
    {
        name: 'Sobre',
        isActive: true,
        linkTag: '#about'
    },
    {
        name: 'Habilidades',
        isActive: false,
        linkTag: '#skills'
    },
    {
        name: 'Portfólio',
        isActive: false,
        linkTag: '#portfolio'
    },
    {
        name: 'Contato',
        isActive: false,
        linkTag: '#contact'
    }
]

export function NavigationLayout({ children }: PageProps) {
    const [navOptions, setNavOptions] = useState(initialNavOptions)

    function handleOnClick(chosenIndex: number) {
        setNavOptions(prevOpts =>
            prevOpts.map((opt, optIndex) => ({
                ...opt,
                isActive: optIndex === chosenIndex ? true : false
            }))
        )
    }

    return (
        <Container>
            <Sidebar>
                <Image src={JSLogo} alt="JS" width="100%" />

                <MenuNavigation>
                    <ul>
                        {navOptions.map((opt, i) => (
                            <NavigationList key={i} isActive={opt.isActive}>
                                <a
                                    href={opt.linkTag}
                                    onClick={() => handleOnClick(i)}
                                >
                                    {opt.name}
                                </a>
                            </NavigationList>
                        ))}
                    </ul>
                </MenuNavigation>
                <SocialMedias>
                    <a
                        href="https://www.linkedin.com/in/joel-sena/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image
                            src={Linkedin}
                            alt="github"
                            layout="responsive"
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/joe_lee229/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image
                            src={Instagram}
                            alt="github"
                            layout="responsive"
                        />
                    </a>
                    <a
                        href="https://github.com/joelsena"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image src={Github} alt="github" layout="responsive" />
                    </a>
                </SocialMedias>
            </Sidebar>
            {children}
        </Container>
    )
}
