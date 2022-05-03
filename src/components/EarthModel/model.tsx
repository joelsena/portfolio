/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
    nodes: {
        Earth_1: THREE.Mesh
    }
    materials: {
        Earth: THREE.MeshStandardMaterial
    }
}

export function EarthModel(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF(
        '/3DModels/earthModel.gltf'
    ) as GLTFResult

    useFrame(state => {
        const time = state.clock.getElapsedTime()

        group.current.rotation.y = time / 2
    })

    return (
        <group ref={group} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Earth_1.geometry}
                material={materials.Earth}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1}
            />
        </group>
    )
}

useGLTF.preload('/3DModels/earthModel.gltf')