import { Suspense, useEffect, useRef, useState } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import { ThumbsUpModel } from './model'
import { Loading } from '../Loading'
import { useDataContext } from '../../context'

export function ThumbsUp() {
    const canvasRef = useRef<HTMLCanvasElement>()
    const { modelProportions, windowSize, breakpoints } = useDataContext()
    const [selectedProportion, setSelectedProportion] = useState(
        modelProportions['THUMBS_UP']['2xl']
    )

    useEffect(() => {
        if (windowSize <= breakpoints.xl) {
            setSelectedProportion(modelProportions['THUMBS_UP'].xl)
        } else setSelectedProportion(modelProportions['THUMBS_UP']['2xl'])
    }, [windowSize, breakpoints, modelProportions])

    return (
        <Canvas ref={canvasRef}>
            <Suspense fallback={<Loading />}>
                <OrbitControls enableZoom={false} rotateSpeed={0.5} />
                <ambientLight intensity={0.5} />

                <directionalLight intensity={0.3} position={[2, 2, 2]} />
                <pointLight intensity={0.1} position={[2, 2, 2]} />

                <ThumbsUpModel
                    visible
                    scale={selectedProportion.scale}
                    position={selectedProportion.position}
                />
            </Suspense>
        </Canvas>
    )
}
