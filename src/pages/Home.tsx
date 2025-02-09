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
                        path="/model/main_model/scene.gltf"
                        position={[0,0.06,0.1]}
                        rotation={[0, -Math.PI / 10, 0]}
                        scale={[0.085, 0.085, 0.085]}
                        hasLight={true}
                        enableRotation={true}
                        enableZoom={false}
                    />
                </Suspense>
            </ImageContent>
        </HomeContainer>
    );
}

const HomeContainer = styled.main`
    height:100%;
    display:flex;
    align-items: center;
    /* display: grid; */
    /* grid-template-columns: 1fr 1fr; */
    /* column-gap: 2rem; */

    /* justify-content:center; */

    /* padding-bottom: 6rem; */
`;

const TextContent = styled.section`
    /* line-height: 1.7; */

    padding-top: 1rem;
    width:100%;
    align-self:baseline;

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
  height: 100%;  // Alterar a altura para 100% da viewport
  width: 100%;    // Garantir que o canvas ocupe a largura total
  justify-self: center;  // Centralizar o canvas
  display: flex;
  align-items: center;
  justify-content: center;
`;