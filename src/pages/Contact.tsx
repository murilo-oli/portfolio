import Model3D from "../components/3D/Model3D";
import { Suspense } from "react";
import Title from "../components/Title";
import Translator from "../components/i18n/Translator";

export default function Contact() {
    return (
        <>
            <Title title="titles.contact" />
            <p><Translator path="generics.onBuilding"/></p>
            <Suspense fallback={<span>Loading...</span>}>
                <Model3D
                    path="/model/cool_flowers/scene.gltf"
                    position={[-0.1, 0.35, -0.01]}
                    rotation={[0, 1.4, 0]}
                    scale={[0.023, 0.023, 0.023]}
                    hasLight={false}
                    enableRotation={false}
                    enableZoom={false}
                />
            </Suspense>
        </>
    );
}