import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"

export function Mic(props) {
  const { nodes, materials } = useGLTF("./assets/models/mic.glb")
  return (
    <group {...props} dispose={null}>
      <group scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mic001_1.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mic001_2.geometry}
          material={materials.Metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mic001_3.geometry}
          material={materials.Glow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mic001_4.geometry}
          material={materials.LightGrey}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./assets/models/mic.glb")