import styled from "styled-components";
import Title from "../components/Title";

export default function About() {
    return (
        <>
            <Title title="titles.me"/>
            <AboutContainer>
                <section>
                    <p>abc</p>
                </section>
                <section>
                    <p>abc</p>
                </section>
            </AboutContainer>
        </>
    );
}

const AboutContainer = styled.section`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    column-gap:2rem;
    padding: 0.8rem 0;
    height:100%;
`;