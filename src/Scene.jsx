import { act, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { StudioGhibli } from "./StudioGhibli";


export const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight
        position={[10, 10, 10]}
        castShadow
        shadow-mapSize-widht={2048}
        shadow-mapSize-height={2048}
      />
      <StudioGhibli />
    </>

  )
}
