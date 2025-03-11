import Model3D from "../components/3D/Model3D";
import { Suspense } from "react";
import Translator from "../components/i18n/Translator";
import Socials from "../components/Socials";

import styled from "styled-components";
import colors from '../styles/colors';

export default function ComingSoon() {
    return (
        <BuildingContainer>
            <p><Translator path="generics.onBuilding"/></p>
            <Socials/>
            <Suspense fallback={<span>Loading...</span>}>
                <Model3D
                    path="/model/cool_flowers/scene.gltf"
                    position={[-0.1, 0.35, -0.01]}
                    rotation={[0, 1.4, 0]}
                    scale={[0.03, 0.03, 0.03]}
                    hasLight={true}
                    enableRotation={true}
                    enableZoom={true}
                />
            </Suspense>
        </BuildingContainer>
    );
}

const BuildingContainer = styled.section`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    row-gap:2rem;
    height:max-content;
    width:max-content;
    justify-self:center;

    color:${colors.fgDark}
`;