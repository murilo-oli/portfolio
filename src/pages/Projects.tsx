import styled from "styled-components";
import Translator from "../components/i18n/Translator";
import Title from "../components/Title";

export default function Projects() {
    return (
        <ProjectContainer>
            <Title title="titles.proj" />
            <ProjectContent>
                <p><Translator path="generics.onBuilding" /></p>
            </ProjectContent>
        </ProjectContainer>
    );
}

const ProjectContainer = styled.section``;
const ProjectContent = styled.section`
    display:flex;
    align-items:center;
    justify-content:center;
`;