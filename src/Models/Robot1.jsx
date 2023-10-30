import React, { useEffect, useRef } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"

export function Robot1(props) {

  const group = useRef()
  const { nodes, materials, animations } = useGLTF("./assets/models/robot1.glb")
  const { actions } = useAnimations(animations, group)

  useEffect(() => 
  {
    actions['CharacterArmature|Idle'].play()
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group
            name="CharacterArmature"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <primitive object={nodes.Root} />
          </group>
          <group
            name="Sphere001"
            position={[0, 0.471, 0.003]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <skinnedMesh
              name="Sphere001_1"
              geometry={nodes.Sphere001_1.geometry}
              material={materials["Material.002"]}
              skeleton={nodes.Sphere001_1.skeleton}
            />
            <skinnedMesh
              name="Sphere001_2"
              geometry={nodes.Sphere001_2.geometry}
              material={materials["Material.001"]}
              skeleton={nodes.Sphere001_2.skeleton}
            />
            <skinnedMesh
              name="Sphere001_3"
              geometry={nodes.Sphere001_3.geometry}
              material={materials["Material.004"]}
              skeleton={nodes.Sphere001_3.skeleton}
            />
            <skinnedMesh
              name="Sphere001_4"
              geometry={nodes.Sphere001_4.geometry}
              material={materials["Material.003"]}
              skeleton={nodes.Sphere001_4.skeleton}
            />
            <skinnedMesh
              name="Sphere001_5"
              geometry={nodes.Sphere001_5.geometry}
              material={materials.Material}
              skeleton={nodes.Sphere001_5.skeleton}
            />
          </group>
          <group
            name="Cube000"
            position={[0, 0.186, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <skinnedMesh
              name="Cube000_1"
              geometry={nodes.Cube000_1.geometry}
              material={materials.Main2}
              skeleton={nodes.Cube000_1.skeleton}
            />
            <skinnedMesh
              name="Cube000_2"
              geometry={nodes.Cube000_2.geometry}
              material={materials.Edge}
              skeleton={nodes.Cube000_2.skeleton}
            />
            <skinnedMesh
              name="Cube000_3"
              geometry={nodes.Cube000_3.geometry}
              material={materials.Main}
              skeleton={nodes.Cube000_3.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./assets/models/robot1.glb");