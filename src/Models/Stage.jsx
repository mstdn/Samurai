import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"

export function Stage(props) {
  const { nodes, materials } = useGLTF("./assets/models/stage.glb")

  return (
    <group {...props} dispose={null}>
      <group scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.background001_1.geometry}
          material={materials.BlackStruss}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.background001_2.geometry}
          material={materials.MetalStruss}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.background001_3.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.background001_4.geometry}
          material={materials.Glow}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./assets/models/stage.glb")