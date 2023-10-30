import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Speaker(props) {
  const { nodes, materials } = useGLTF("./assets/models/speaker.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.speaker004_1.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.speaker004_2.geometry}
          material={materials.LightGrey}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./assets/models/speaker.glb");