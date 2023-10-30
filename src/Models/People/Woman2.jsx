import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Woman2(props) {

  const group = useRef()
  const { nodes, materials, animations } = useGLTF("./assets/models/people/woman2.glb")
  const { actions } = useAnimations(animations, group)

  useEffect(() => 
  {
    actions['HumanArmature|Female_Idle'].play()
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group
            name="HumanArmature"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <primitive object={nodes.Bone} />
          </group>
          <group name="Female" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name="Female_1"
              geometry={nodes.Female_1.geometry}
              material={materials.Shirt}
              skeleton={nodes.Female_1.skeleton}
            />
            <skinnedMesh
              name="Female_2"
              geometry={nodes.Female_2.geometry}
              material={materials.LightJacket}
              skeleton={nodes.Female_2.skeleton}
            />
            <skinnedMesh
              name="Female_3"
              geometry={nodes.Female_3.geometry}
              material={materials.Pants}
              skeleton={nodes.Female_3.skeleton}
            />
            <skinnedMesh
              name="Female_4"
              geometry={nodes.Female_4.geometry}
              material={materials.Shoes}
              skeleton={nodes.Female_4.skeleton}
            />
            <skinnedMesh
              name="Female_5"
              geometry={nodes.Female_5.geometry}
              material={materials.Jacket}
              skeleton={nodes.Female_5.skeleton}
            />
            <skinnedMesh
              name="Female_6"
              geometry={nodes.Female_6.geometry}
              material={materials.Skin}
              skeleton={nodes.Female_6.skeleton}
            />
            <skinnedMesh
              name="Female_7"
              geometry={nodes.Female_7.geometry}
              material={materials.HairBase}
              skeleton={nodes.Female_7.skeleton}
            />
            <skinnedMesh
              name="Female_8"
              geometry={nodes.Female_8.geometry}
              material={materials.Hair}
              skeleton={nodes.Female_8.skeleton}
            />
            <skinnedMesh
              name="Female_9"
              geometry={nodes.Female_9.geometry}
              material={materials.Eyebrows}
              skeleton={nodes.Female_9.skeleton}
            />
            <skinnedMesh
              name="Female_10"
              geometry={nodes.Female_10.geometry}
              material={materials.Eyes}
              skeleton={nodes.Female_10.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./assets/models/people/woman2.glb");