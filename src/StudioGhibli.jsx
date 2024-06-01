import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function StudioGhibli(props) {
  const { nodes, materials } = useGLTF('/3d_daily_ghibli.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, -10.582, 2]} rotation={[Math.PI / 2, 0, 0]}>
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.GhiblipPlane46_lambert4_0.geometry}
            material={materials.lambert4}
            rotation={[Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/3d_daily_ghibli.glb')
