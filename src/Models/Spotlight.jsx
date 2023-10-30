import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Spotlight(props) {
  const { nodes, materials } = useGLTF("./assets/models/spotlight.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Beam_spotlight_1.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Beam_spotlight_2.geometry}
          material={materials.LightGrey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Beam_spotlight_3.geometry}
          material={materials.Glow}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./assets/models/spotlight.glb");