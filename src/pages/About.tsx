import styled from "styled-components";
import Title from "../components/Title";
import Socials from "../components/Socials";
import colors from "../styles/colors";
import ProfilePhoto from '../assets/images/myPicture.jpeg';
import Translator from "../components/i18n/Translator";
type TechColor = {
    basecolor: string
}

export default function About() {
    const techs = [
        "Javascript", "Typescript", "C#", ".NET", "ReactJs", "VueJs",
        "NextJs", "NuxtJs", "Tailwind", "Sass", "Styled Components",
        "PostgreSQL", "MongoDB", "SQL Server", "Selenium", "Cypress",
        "Git", "GitLab", "Figma", "CI/CD", "Docker"
    ];

    return (
        <AboutContainer>
            <Title title="titles.me" />
            <AboutContent>
                <PhotoContent>
                    <img src={ProfilePhoto} alt="Me" />
                    <Socials />
                </PhotoContent>
                <InfosContent>
                    <section>
                        <p><Translator path="generics.onBuilding"/></p>
                        <p>Mussum Ipsum, cacilds vidis litro abertis. Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Detraxit consequat et quo num tendi nada. Manduma pindureta quium dia nois paga.</p>
                        <p>Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Detraxit consequat et quo num tendi nada. Casamentiss faiz malandris se pirulitá. Negão é teu passadis, eu sou faxa pretis.</p>
                    </section>
                    <TechContainer>
                        {techs.map((t, idx) => {

                            //const baseColor = colors.techColors[idx % colors.techColors.length];
                            const basecolor = colors.techColors[Math.floor(Math.random() * colors.techColors.length)];

                            return (
                                <Techs key={idx} basecolor={basecolor}>{t}</Techs>
                            )
                        })}
                    </TechContainer>
                </InfosContent>
            </AboutContent>
        </AboutContainer>
    );
}

const AboutContainer = styled.section`
    height: 80%;
`;

const AboutContent = styled.section`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    column-gap:1rem;
    height:100%;

    & > section{
        width:100%;
        padding-top:1rem;
    }
`;

const PhotoContent = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    column-gap: 0.5rem;
    height:100%;

    & img{
        height: 24rem;
        width: 100%;
        object-fit: cover;
        object-position: top;
        border-radius: 0.5rem;
    }
`;

const InfosContent = styled.section`
    display: flex;
    flex-direction: column;
    row-gap:2rem;
    height:100%;
    & section p{
        padding-bottom: 0.5rem;
    }
`;

const TechContainer = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 0.3rem;
    row-gap: 0.3rem;
`;

const Techs = styled.span<TechColor>`
    background-color:${props => props.basecolor}4D;
    color: #ffffffc7;
    border: 1px solid ${props => props.basecolor};
    border-radius: 0.5rem;
    border-style: dashed;
    padding: 0.3rem 0.8rem;
`;