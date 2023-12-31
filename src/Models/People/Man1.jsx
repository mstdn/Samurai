import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Man1(props) {

  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./assets/models/people/man1.glb");
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions['HumanArmature|Man_Jump'].play()
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
          <group name="BaseHuman" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name="BaseHuman_1"
              geometry={nodes.BaseHuman_1.geometry}
              material={materials.Shirt}
              skeleton={nodes.BaseHuman_1.skeleton}
            />
            <skinnedMesh
              name="BaseHuman_2"
              geometry={nodes.BaseHuman_2.geometry}
              material={materials.Skin}
              skeleton={nodes.BaseHuman_2.skeleton}
            />
            <skinnedMesh
              name="BaseHuman_3"
              geometry={nodes.BaseHuman_3.geometry}
              material={materials.Pants}
              skeleton={nodes.BaseHuman_3.skeleton}
            />
            <skinnedMesh
              name="BaseHuman_4"
              geometry={nodes.BaseHuman_4.geometry}
              material={materials.Eyes}
              skeleton={nodes.BaseHuman_4.skeleton}
            />
            <skinnedMesh
              name="BaseHuman_5"
              geometry={nodes.BaseHuman_5.geometry}
              material={materials.Socks}
              skeleton={nodes.BaseHuman_5.skeleton}
            />
            <skinnedMesh
              name="BaseHuman_6"
              geometry={nodes.BaseHuman_6.geometry}
              material={materials.Hair}
              skeleton={nodes.BaseHuman_6.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./assets/models/people/man1.glb");