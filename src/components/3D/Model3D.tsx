import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useEffect, useRef } from 'react';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';

function Model() {
    const { scene } = useThree();
    const loader = new GLTFLoader();
    const mixerRef = useRef<THREE.AnimationMixer | null>(null);

    useEffect(() => {
        loader.load(
            '/model/scene.gltf',
            function (gltf) {
                const model = gltf.scene;
                model.scale.set(0.08, 0.08, 0.085); // Ajuste a escala do modelo
                model.rotation.y = - Math.PI / 10;
                scene.add(model);
                mixerRef.current = new THREE.AnimationMixer(model);
                mixerRef.current.clipAction(gltf.animations[0]).play();
            },
            function (xhr) {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
            },
            function (error) {
                console.error('An error happened', error);
            }
        );
        return () => {
            // Limpeza ao desmontar
            if (mixerRef.current) {
                mixerRef.current.stopAllAction();
            }
        };
    }, [scene, loader]);

    useFrame((_state, delta) => {
        // Atualiza o mixer em cada quadro
        if (mixerRef.current) {
            mixerRef.current.update(delta);
        }
    });

    return null;
}

export default function Model3D() {
    return (
        <Canvas style={{ width: '100%', height: '100%' }}
            camera={{ position: [1.8, 0.8, 0], }}>
            <Suspense fallback={<span>Loading...</span>}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />

                {/* Luz de fundo em forma de círculo */}
                <pointLight
                    color="#1F44D9"
                    position={[0, 1, -1]} // Posicione atrás do modelo
                    intensity={50}
                    distance={5}
                    decay={2}
                />

                <Model />
                <OrbitControls minDistance={2} maxDistance={3} enableZoom={false} enableRotate={false} />
            </Suspense>
        </Canvas>
    );
}
