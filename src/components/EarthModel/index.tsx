import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'

import { EarthModel } from './model'
import { Loading } from '../Loading'
import { useDataContext } from '../../context'

type Propor = {
    width: string | number
    height: string | number
}

export function Earth() {
    const canvasRef = useRef<HTMLCanvasElement>()
    const { modelProportions, windowSize, breakpoints } = useDataContext()
    const [selectedProportion, setSelectedProportion] = useState(
        modelProportions['EARTH']['2xl']
    )

    useEffect(() => {
        if (windowSize <= breakpoints.xl) {
            setSelectedProportion(modelProportions['EARTH'].xl)
        } else setSelectedProportion(modelProportions['EARTH']['2xl'])
    }, [windowSize, breakpoints, modelProportions])

    return (
        <Canvas ref={canvasRef}>
            <Suspense fallback={<Loading />}>
                <OrbitControls enableZoom={false} rotateSpeed={0.5} />
                <ambientLight intensity={0.5} />

                <PerspectiveCamera makeDefault fov={80} position={[0, 0, 4]} />
                <EarthModel
                    visible
                    scale={selectedProportion.scale}
                    position={selectedProportion.position}
                />
            </Suspense>
        </Canvas>
    )
}
