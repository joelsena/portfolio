import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import { EarthModel } from './model'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Loading } from '../Loading'

export function Earth() {
    return (
        <Canvas>
            <Suspense fallback={<Loading />}>
                <OrbitControls enableZoom={false} rotateSpeed={0.5} />
                <ambientLight intensity={0.5} />

                <PerspectiveCamera makeDefault fov={80} position={[0, 0, 4]} />
                <EarthModel
                    visible
                    scale={[0.022, 0.022, 0.022]}
                    position={[0, -2.1, 0]}
                />
            </Suspense>
        </Canvas>
    )
}
