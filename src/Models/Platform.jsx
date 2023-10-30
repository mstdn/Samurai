import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Platform(props) {
  const { nodes, materials } = useGLTF("./assets/models/platform.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Platform_4x4_1.geometry}
          material={materials.Texture_Signs}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Platform_4x4_2.geometry}
          material={materials.LightGrey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Platform_4x4_3.geometry}
          material={materials.Grey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Platform_4x4_4.geometry}
          material={materials.DarkGrey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Platform_4x4_5.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Platform_4x4_6.geometry}
          material={materials.Orange}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./assets/models/platform.glb");