import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useEffect, useMemo, useRef } from 'react';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';

interface ModelConfigs {
    path: string,
    position?: [number, number, number],
    rotation?: [number, number, number],
    scale?: [number, number, number],
    hasLight: boolean,
    enableRotation: boolean,
    enableZoom: boolean
}

function Model({ path, position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1]}: ModelConfigs) {
    const { scene } = useThree();
    const loader = useMemo(() => new GLTFLoader(), []);
    const mixerRef = useRef<THREE.AnimationMixer | null>(null);

    useEffect(() => {
        loader.load(
            path,
            function (gltf) {
                const model = gltf.scene;
                model.position.set(...position);
                model.rotation.set(...rotation);
                model.scale.set(...scale);

                mixerRef.current = new THREE.AnimationMixer(model);
                if (gltf.animations.length > 0) {
                    mixerRef.current.clipAction(gltf.animations[0]).play();
                }

                const removableBg = model.getObjectByName("small-polka-dot-seamless-pattern-background-retro-vintage-vecto_119") as THREE.Object3D;
 
                if(removableBg){
                    removableBg.parent?.remove(removableBg)
                }

                scene.add(model);
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

export default function Model3D(props: ModelConfigs) {
    return (
        <Canvas style={{ width: '100%', height: '100%' }}
            camera={{ position: [1.8, 0.8, 0], }}>
            <Suspense fallback={<span>Loading...</span>}>
                <ambientLight />
                {props.hasLight &&
                    <>
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
                    </>
                }
                <Model {...props} />
                <OrbitControls
                    minDistance={2}
                    maxDistance={3}
                    enableZoom={props.enableZoom}
                    enableRotate={props.enableRotation}
                    maxPolarAngle={0}
                    minPolarAngle={Math.PI *0.4} />
            </Suspense>
        </Canvas>
    );
}
