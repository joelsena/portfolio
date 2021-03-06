import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'

import { Container, PortSection, ArrowIndicator, Copy } from '../styles/home'
import { ProjectSection } from '../components/ProjectSection'
import { ContactForm } from '../components/ContactForm'
import { ThumbsUp } from '../components/ThumbsUpModel'
import { projects } from '../shared/projects_data'
import { Earth } from '../components/EarthModel'
import { Section } from '../components/Section'
import { Skills } from '../components/Skills'
import { Tags } from '../components/Tags'
import { useDataContext } from '../context/'

import ArrowDown from '../assets/icons/arrow-down.svg'
import JJImage from '../assets/logos/JJ.svg'
import Hero from '../assets/hero.png'

const Home: NextPage = () => {
    const { windowSize } = useDataContext()

    return (
        <Container>
            <Head>
                <title>Home | Joel Sena</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
            </Head>

            <Tags
                tags={[
                    { content: "<html lang='pt-BR'>" },
                    { content: '<body>', hierarchy: 'second' }
                ]}
                wrapPad
            />

            <Section
                hero={true}
                section={{
                    titles: [
                        'Olá,',
                        {
                            pre: 'Sou ',
                            content: (
                                <Image src={JJImage} alt="JJ" width={48} />
                            ),
                            pos: 'oel,'
                        },
                        'Web Developer'
                    ],
                    texts: ['Front End Developer / Researcher']
                }}
                titleColor="white"
                buttons={[
                    {
                        as: 'a',
                        text: 'Me Contate!',
                        cHref: '#contact'
                    },
                    {
                        as: 'a',
                        text: 'Baixar CV',
                        styleType: 'filled',
                        // TODO: Colocar no .env?
                        cHref: 'https://drive.google.com/file/d/1tMbfrymIE8y2PW1RS47mbKBgEkvGNHPi/view?usp=sharing'
                    }
                ]}
            >
                <Image
                    src={Hero}
                    alt="Minha Imagem"
                    priority
                    layout="responsive"
                    style={{
                        zIndex: -1
                    }}
                />
                <ArrowIndicator>
                    <Image src={ArrowDown} alt="Abaixo" layout="responsive" />
                </ArrowIndicator>
            </Section>

            <PortSection id="portfolio">
                <Tags tags={[{ content: '<h1>' }]} />
                <h1>Meu Portfólio</h1>
                <Tags tags={[{ content: '</h1>' }]} />

                <Tags tags={[{ content: '<p>' }]} />
                <p>
                    Melhores projetos feitos recentemente. Fiz a maioria dos
                    design (com o Figma e Adobe XD) e também do desenvolvimento
                    front end.
                </p>
                <Tags tags={[{ content: '</p>' }]} />
            </PortSection>

            <Tags tags={[{ content: '<section>', hierarchy: 'third' }]} />

            {projects.map((pro, i) => (
                <ProjectSection
                    key={pro.title}
                    data={{
                        description: pro.description,
                        accessLink: pro.accessLink,
                        title: pro.title,
                        image: pro.image,
                        year: pro.year
                    }}
                    inverted={windowSize > 500 ? pro.inverted : false}
                />
            ))}

            <Tags tags={[{ content: '</section>', hierarchy: 'third' }]} />

            <Section
                id="about"
                section={{
                    titles: ['Eu, eu e Eu'],
                    texts: [
                        `Estudo react e react native desde 2018 e até o momento
                        venho me especializando em react e javascript/typescript
                        que são as tecnologias/linguagens que mais gosto e me
                        divirto codando no momento. Claro que consequentemente
                        possuo sólidos conhecimento com desenvolvimento web no
                        geral.`,
                        `Já participei de vários projetos, já mexi com python
                        voltado a IA e já desenvolvi uma aplicação com a
                        framework Angular.`,
                        `Estou no segundo semestre de análise e desenvolvimento
                        de sistemas na modalidade EaD, fazendo meu próprios
                        horários de estudo e me forçando a ser mais organizado e
                        resiliente.`
                    ]
                }}
            >
                <ThumbsUp />
            </Section>

            <Section
                id="skills"
                section={{
                    titles: ['Habilidades', '&', 'Experiência'],
                    texts: [
                        `Desde que adentrei o mundo da programação venho descobrindo e explorando muitas tecnologias que estão revolucionando o mundo e espero arrecadar muito mais experiência nessa área e em outras mais.`,
                        `Estou entrando em uma etapa nova na minha vida. Conciliando minha vida pessoal e a faculdade, tento entrar no mercado de trabalho.`
                    ]
                }}
            >
                <Skills />
            </Section>

            <Section
                id="contact"
                section={{
                    titles: ['Me Contate'],
                    texts: [
                        `No momento estou interessado em vagas para desenvolvimento front end com as tecnologias reactjs, nextjs. Contudo, se tiver alguma dúvida, pedido ou quiser trocar uma idéia não hesite em usar o formulário.`
                    ]
                }}
                additionalContent={ContactForm}
            >
                <Earth />
            </Section>

            <Tags
                tags={[
                    { content: '</body>', hierarchy: 'second' },
                    { content: '<html>' }
                ]}
                wrapPad
            />

            <Copy>JoelSena@2022. All rights reserved.</Copy>
        </Container>
    )
}

export default Home
