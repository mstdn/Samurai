import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Barricade(props) {
  const { nodes, materials } = useGLTF("./assets/models/barricade.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.barricade.geometry}
        material={materials.MetalStruss}
        scale={100}
      />
    </group>
  );
}

useGLTF.preload("./assets/models/barricade.glb");