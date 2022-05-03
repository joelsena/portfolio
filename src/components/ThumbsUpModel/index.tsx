import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import { ThumbsUpModel } from './model'
import { OrbitControls } from '@react-three/drei'
import { Loading } from '../Loading'

export function ThumbsUp() {
    return (
        <Canvas>
            <Suspense fallback={<Loading />}>
                <OrbitControls enableZoom={false} rotateSpeed={0.5} />
                <ambientLight intensity={0.5} />

                <directionalLight intensity={0.3} position={[2, 2, 2]} />
                <pointLight intensity={0.1} position={[2, 2, 2]} />

                <ThumbsUpModel
                    visible
                    scale={[
                        1 / Math.pow(6, 2),
                        1 / Math.pow(5.5, 2),
                        1 / Math.pow(6, 2)
                    ]}
                    position={[1, -2.1, 0]}
                />
            </Suspense>
        </Canvas>
    )
}
