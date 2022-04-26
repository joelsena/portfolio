import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'

import {
    Container,
    PortSection,
    ArrowIndicator,
    Copy,
    MidSection
} from '../styles/home'
import { Tags } from '../components/Tags'
import { ProjectSection } from '../components/ProjectSection'
import { Section } from '../components/Section'
import { Skills } from '../components/Skills'

import JJImage from '../assets/logos/JJ.svg'
import ArrowDown from '../assets/icons/arrow-down.svg'
import Hero from '../assets/hero.svg'

import RVHistory from '../assets/previews/rv_history_preview.png'
import Expose from '../assets/previews/expose_preview.png'
import Scoutnet from '../assets/previews/scoutnet_preview.png'
import SmartStorage from '../assets/previews/smart_preview.png'
import { ContactForm } from '../components/ContactForm'

const Home: NextPage = () => {
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
                section={{
                    titles: [
                        'Olá,',
                        {
                            pre: 'Sou ',
                            content: (
                                <Image src={JJImage} alt="JJ" width={52} />
                            ),
                            pos: 'oel,'
                        },
                        'Web Developer'
                    ],
                    texts: ['Front End Developer / Researcher']
                }}
                titleColor="white"
                button={{
                    as: 'a',
                    text: 'Me Contate!',
                    cHref: '#contact'
                }}
            >
                <Image
                    src={Hero}
                    alt="Minha Imagem"
                    priority
                    layout="responsive"
                />
            </Section>

            <ArrowIndicator>
                <Image src={ArrowDown} alt="Abaixo" layout="responsive" />
            </ArrowIndicator>

            <PortSection id="portfolio">
                <MidSection>
                    <Tags tags={[{ content: '<h1>' }]} />
                    <h1>Meu Portfólio</h1>
                    <Tags tags={[{ content: '</h1>' }]} />

                    <Tags tags={[{ content: '<p>' }]} />
                    <p>
                        Melhores projetos feitos recentemente. Fiz a maioria dos
                        design (com o Figma e Adobe XD) e também do
                        desenvolvimento front end.
                    </p>
                    <Tags tags={[{ content: '</p>' }]} />
                </MidSection>
                <MidSection></MidSection>
            </PortSection>

            <Tags tags={[{ content: '<section>', hierarchy: 'third' }]} />

            <ProjectSection
                data={{
                    description:
                        'Sítios arqueológicos na palma de sua mão. #reactjs #nextjs',
                    accessLink: 'https://rv-history.vercel.app',
                    title: 'VR History',
                    image: RVHistory,
                    year: 2021
                }}
            />

            <ProjectSection
                data={{
                    description:
                        'Aplicativo de fidelidade para clientes da empresa e site administrativo. #reactjs #reactnative',
                    accessLink:
                        'https://play.google.com/store/apps/details?id=com.expose.exposefidelidade',
                    title: 'Expose Fidelidade',
                    image: Expose,
                    year: 2021
                }}
                inverted
            />

            <ProjectSection
                data={{
                    description:
                        'Projeto que fiz durante meu ensino médio no intuito de organizar as dispensa das pessoas e ajudar a economizar. #reactjs',
                    accessLink: 'https://smartstorage-deploy.herokuapp.com',
                    title: 'Smart Storage v1',
                    image: SmartStorage,
                    year: 2020
                }}
            />

            <ProjectSection
                data={{
                    description:
                        'Startup feita por estudantes do ensino médio com o propósito de criar soluções para os problemas de organização e falta de marketing da comunidade escoteira do Brasil. #angular2+ #nodejs',
                    accessLink: 'https://landpage-scoutnet-mvp.herokuapp.com',
                    title: 'Scoutnet',
                    image: Scoutnet,
                    year: 2020
                }}
                inverted
            />

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
                <h1>Globo</h1>
            </Section>

            <Section
                id="skills"
                section={{
                    titles: ['Habilidades & Experiência'],
                    texts: [
                        `Desde que adentrei o mundo da programação venho descobrindo e explorando muitas tecnologias que estão revolucionando o mundo e espero arrecadar muito mais experiência nessa área e em outras mais.`,
                        `Infezlimente não tive nenhuma experiência direta com o mercado de trabalho, me colocando numa situação complicada para conseguir um emprego.`,
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
                        `No momento estou interessado em vagas júnior para desenvolvimento front end com as tecnologias reactjs, nextjs. Contudo, se tiver alguma dúvida, pedido ou quiser trocar uma idéia não hesite em usar o formulário.`
                    ]
                }}
                additionalContent={ContactForm}
            >
                <h1>Formulário</h1>
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
