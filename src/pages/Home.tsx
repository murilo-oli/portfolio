import styled from "styled-components";
import Socials from "../components/Socials";

export default function Home() {
    return (
        <HomeContainer>
            <TextContent>
                <p>Hi, I&apos;m <strong>Murilo Oliveira</strong>,</p>
                <h1>A PROFESSIONAL PROBLEM SOLVER</h1>
                <p>Currently solving web problems with <span data-lang="dotnet">.NET</span>, <span data-lang="csharp">C#</span>, <span data-lang="js">Javascript</span>, <span data-lang="ts">Typescript</span>, <span data-lang="react">React</span>, and <span data-lang="vue">Vue.</span></p>
                <p>Also creating and documenting my own problems learning something new.</p>
                <p>See you.</p>
                <Socials />
            </TextContent>
            <ImageContent>
                <section></section>
            </ImageContent>
        </HomeContainer>
    );
}

const HomeContainer = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;

    column-gap: 2rem;

    align-items: center;

    padding-bottom: 6rem;
`;

const TextContent = styled.section`
    /* line-height: 1.7; */
    padding-right: 10rem;

    & p{
        padding: 1rem 0;
    }

    & h1{
        font-size: 2.5rem;
    }

    & span{
        font-weight: bold;
        text-decoration:underline dashed;
    }

    & span[data-lang="dotnet"]{color: #5a36dd;}
    & span[data-lang="csharp"]{color: #9b4993;}
    & span[data-lang="js"]{color: #F0DB4F;}
    & span[data-lang="ts"]{color: #007acc;}
    & span[data-lang="react"]{color: #61DBFB;}
    & span[data-lang="vue"]{color: #41B883;}
`;

const ImageContent = styled.section`
    height: 90%;
    justify-self: flex-end;

    & section{
        height: 100%;
        width: 25rem;
        border-radius: 2rem;
        background-color: #1F44D9;
    }
`;