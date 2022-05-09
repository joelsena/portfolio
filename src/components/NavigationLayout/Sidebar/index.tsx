import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'

import {
    Container,
    MenuNavigation,
    NavigationList,
    SocialMedias,
    OpenButton
} from './styles'

import JSLogo from '../../../assets/logos/logo.svg'
import JS from '../../../assets/logos/JS.svg'
import PlayIcon from '../../../assets/icons/play.svg'
import Github from '../../../assets/icons/github.svg'
import Instagram from '../../../assets/icons/instagram.svg'
import Linkedin from '../../../assets/icons/linkedin-rect.svg'
import { useDataContext } from '../../../context'

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

export function Sidebar() {
    const [navOptions, setNavOptions] = useState(initialNavOptions)
    const [showSidebar, setShowSidebar] = useState(true)
    const { windowSize } = useDataContext()

    function handleOnClick(chosenIndex: number) {
        setNavOptions(prevOpts =>
            prevOpts.map((opt, optIndex) => ({
                ...opt,
                isActive: optIndex === chosenIndex ? true : false
            }))
        )
    }

    useEffect(() => {
        if (windowSize <= 920) setShowSidebar(false)
        else setShowSidebar(true)
    }, [windowSize])

    return (
        <>
            <OpenButton
                onClick={() => setShowSidebar(prev => !prev)}
                isSidebarOpen={showSidebar}
            >
                <div>
                    <Image src={JS} alt="JS" layout="responsive" />
                </div>
                <span>
                    <Image src={PlayIcon} alt=">" width={8} height={8} />
                </span>
            </OpenButton>

            <Container isVisible={showSidebar}>
                <Link href="/">
                    <a
                        style={{
                            opacity: windowSize <= 920 ? 0 : 1,
                            position: 'relative'
                        }}
                    >
                        <Image src={JSLogo} alt="JS" layout="intrinsic" />
                    </a>
                </Link>

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
            </Container>
        </>
    )
}
