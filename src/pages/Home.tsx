import styled from "styled-components";
import Socials from "../components/Socials";
import Model3D from "../components/3D/Model3D";
import { Suspense } from "react";
import Translator from "../components/i18n/Translator";

export default function Home() {
    return (
        <HomeContainer id="home">
            <TextContent>
                <p><Translator path="home.intro"/></p>
                <h1><Translator path="home.impact"/></h1>
                <p><Translator path="home.mainText"/></p>
                <p><Translator path="home.otherText"/></p>
                <p><Translator path="home.bye"/></p>
                <Socials />
            </TextContent>
            <ImageContent>
                <Suspense fallback={<span>Loading...</span>}>
                    <Model3D 
                        path="/model/myHead.glb"
                        position={[0.2,-0.5,0]}
                        rotation={[0, 0, 0]}
                        scale={[10, 10, 10]}
                        hasLight={true}
                        enableRotation={true}
                        enableZoom={true}
                    />
                </Suspense>
            </ImageContent>
        </HomeContainer>
    );
}

const HomeContainer = styled.section`
    height:100%;
    display:flex;
    align-items: center;
`;

const TextContent = styled.section`
    padding-top: 1rem;
    width:100%;
    align-self: baseline;

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
  height: 100%;
  width: 100%;
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;