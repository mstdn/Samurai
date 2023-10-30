import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Spot(props) {
  const { nodes, materials } = useGLTF("./assets/models/spot.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={100}>
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.spotlight002_1.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          
          castShadow
          // receiveShadow
          geometry={nodes.spotlight002_2.geometry}
          material={materials.LightGrey}
        />
        <mesh
        
          castShadow
          // receiveShadow
          geometry={nodes.spotlight002_3.geometry}
          material={materials["Material.003"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./assets/models/spot.glb");