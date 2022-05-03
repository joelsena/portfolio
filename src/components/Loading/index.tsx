import { useProgress, Html } from '@react-three/drei'

export function Loading() {
    const { progress } = useProgress()

    return (
        <Html
            style={{
                width: '100%',
                height: '100%'
            }}
        >
            <h3>{Math.floor(progress)}% loaded</h3>
        </Html>
    )
}
