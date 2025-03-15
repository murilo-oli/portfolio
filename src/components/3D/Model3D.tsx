import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import * as THREE from "three";

interface ModelConfigs {
    path: string;
    position?: [number, number, number];
    rotation?: [number, number, number];
    scale?: [number, number, number];
    hasLight: boolean;
    enableRotation: boolean;
    enableZoom: boolean;
}

function Model({
    path,
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    scale = [1, 1, 1],
}: ModelConfigs) {
    const { scene } = useThree();
    const loader = useMemo(() => new GLTFLoader(), []);
    const modelRef = useRef<THREE.Object3D | null>(null);

    useEffect(() => {
        loader.load(
            path,
            (gltf) => {
                const model = gltf.scene;
                model.position.set(...position);
                model.rotation.set(...rotation);
                model.scale.set(...scale);

                modelRef.current = model;
                scene.add(model);
            },
            undefined,
            (error) => console.error("Error loading model:", error)
        );
    }, [scene, loader]);

    useEffect(() => {
        const onMouseMove = (event: MouseEvent) => {
            if (!modelRef.current) return;

            const { clientX, clientY } = event;
            const { innerWidth, innerHeight } = window;

            const x = (clientX / innerWidth) * 2 - 1;
            const y = (clientY / innerHeight) * 2 - 1;

            modelRef.current.rotation.y = x * Math.PI * 0.5;

            const minRotationX = -Math.PI / 10;
            const maxRotationX = Math.PI / 10;

            modelRef.current.rotation.x = Math.max(minRotationX, Math.min(maxRotationX, y * Math.PI * 0.5));
        };

        window.addEventListener("mousemove", onMouseMove);
        return () => window.removeEventListener("mousemove", onMouseMove);
    }, []);

    return null;
}

export default function Model3D(props: ModelConfigs) {
    return (
        <Canvas style={{ width: "100%", height: "100%" }} camera={{ position: [0, 0, 3] }}>
            <Suspense fallback={<span>Loading...</span>}>
                <ambientLight color="#fffcd9"/>
                {props.hasLight && (
                    <>
                        <pointLight color="#1F44D9" position={[0, 1, -1]} intensity={50} distance={5} decay={2} />

                        <pointLight color="#3d21da" position={[-2, 1, 1]} intensity={50} distance={5} decay={2} />
                    </>
                )}
                <Model {...props} />
                <OrbitControls enableZoom={props.enableZoom} enableRotate={props.enableRotation} />
            </Suspense>
        </Canvas>
    );
}
