import { Container, CardContainer, LevelBarContainer } from './styles'
import { ExperienceCard } from './ExperienceCard'
import { LevelBar } from './LevelBar'

export function Skills() {
    return (
        <Container>
            <LevelBarContainer>
                <LevelBar title="Front-end" progress={80} />
                <LevelBar title="ReactJS" progress={70} barColor="green_600" />
                <LevelBar title="NextJS" progress={60} />
                <LevelBar
                    title="TypeScript"
                    progress={55}
                    barColor="green_600"
                />
            </LevelBarContainer>

            <CardContainer>
                <ExperienceCard
                    workTitle="Full stack Developer"
                    company="EXPOSE"
                    duration="2020-2021"
                    description={`Freelance - Aplicativo de fidelidade para a empresa,
                        hospedado na Apple Store e na Google Play Store.
                        #ReactJS #ReactNative #NodeJS`}
                />
                <ExperienceCard
                    workTitle="Full stack Developer"
                    company="Scoutnet"
                    duration="2020-2021"
                    description={`Startup para o auxílio das atividades do movimento escoteiro.
                        #Angular2+ #ReactNative`}
                />
            </CardContainer>
        </Container>
    )
}
