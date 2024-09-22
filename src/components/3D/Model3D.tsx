import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useEffect, useMemo, useRef } from 'react';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';

function Model() {
    const { scene } = useThree();
    const loader = useMemo(() => new GLTFLoader(), []);
    const mixerRef = useRef<THREE.AnimationMixer | null>(null);

    useEffect(() => {
        loader.load(
            '/model/scene.gltf',
            function (gltf) {
                const model = gltf.scene;
                model.scale.set(0.08, 0.08, 0.085);
                model.rotation.y = - Math.PI / 10;
                scene.add(model);
                mixerRef.current = new THREE.AnimationMixer(model);
                if (gltf.animations.length > 0) {
                    mixerRef.current.clipAction(gltf.animations[0]).play();
                }
            },
            function (xhr) {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
            },
            function (error) {
                console.error('An error happened', error);
            }
        );
        return () => {
            if (mixerRef.current) {
                mixerRef.current.stopAllAction();
            }
        };
    }, [scene, loader]);

    useFrame((_state, delta) => {
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
                <ambientLight/>
                <pointLight
                    color="#1F44D9"
                    position={[0, 1, -1]}
                    intensity={50}
                    distance={5}
                    decay={2}
                />
                <pointLight
                    color="#450496"
                    position={[-2, 1, 1]}
                    intensity={50}
                    distance={5}
                    decay={2}
                />
                <Model />
                <OrbitControls 
                    minDistance={2} 
                    maxDistance={3} 
                    enableZoom={false} 
                    enableRotate={false} />
            </Suspense>
        </Canvas>
    );
}
