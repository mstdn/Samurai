import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Woman1(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./assets/models/people/woman1.glb");
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions['HumanArmature|Female_Clapping'].play()
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
              material={materials.Skin}
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
              material={materials.Socks}
              skeleton={nodes.Female_5.skeleton}
            />
            <skinnedMesh
              name="Female_6"
              geometry={nodes.Female_6.geometry}
              material={materials.HairBase}
              skeleton={nodes.Female_6.skeleton}
            />
            <skinnedMesh
              name="Female_7"
              geometry={nodes.Female_7.geometry}
              material={materials.Hair}
              skeleton={nodes.Female_7.skeleton}
            />
            <skinnedMesh
              name="Female_8"
              geometry={nodes.Female_8.geometry}
              material={materials.Eyes}
              skeleton={nodes.Female_8.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./assets/models/people/woman1.glb");