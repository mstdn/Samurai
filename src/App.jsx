import * as THREE from 'three'
import { useRef , useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { 
  PositionalAudio,
  OrbitControls,
  Loader, PresentationControls,
  useGLTF,
  SoftShadows,
  Environment, 
  Lightformer
} from '@react-three/drei'
import { Bloom, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import { Perf } from 'r3f-perf'
import { useFrame } from '@react-three/fiber'
import Lights from './Lights.jsx'
import World from './World/World'

const CameraAnimation = () => {
  const [started, setStarted] = useState(false)
  const vec = new THREE.Vector3();

  useEffect(() => {
    setStarted(true);
  });

  useFrame(state => {
    if (started) {
      state.camera.lookAt(0, 0, 0);
      state.camera.position.lerp(vec.set(10, 6, 20), .008)
    } return null
  })
   return null;
}
 

export default function App({ ready }) 
{
  return ( <>
    <Loader 
          dataInterpolation={ (p) => `Meow ${p.toFixed(0)}%` }
          barStyles={{ 
              backgroundColor: 'gray',
              height: '20px' 
          }}
          innerStyles={{
              backgroundColor: 'white',
              height: '20px'
          }}
          containerStyles={{
              backgroundColor: 'black',
              padding: '20px' 
          }}
          dataStyles={{
              color: 'white', 
              fontSize: '16px'
          }}
      />
    <Canvas
        shadows
        camera={ {
          fov: 45,
          near: 0.1,
          far: 200,
          position: [ 1.5, 10, 20 ]
        } }
      >
        <Perf />
        <CameraAnimation />
        
        
        <EffectComposer>
          {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} /> */}
          <Bloom 
            // luminanceThreshold={0} 
            // luminanceSmoothing={0.9} 
            // height={300} 
          />
          {/* <Noise opacity={0.02} /> */}
          <Vignette eskil={false} offset={0.1} darkness={1} />
        </EffectComposer>

        {!ready && <PositionalAudio autoplay loop url="./assets/mp3/1.mp3" distance={ 30 } />}
        <fog attach="fog" color="#252525" near={ 20 } far={ 100 } />
        <Model ready={ ready } />
      </Canvas>
  </>
  )
}


function Model({ ready }) 
{

  const group = useRef()
  const { nodes, materials } = useGLTF('./assets/models/mic.glb')
  

  return ( <>
  <group ref={group}>
      <Lights />
      {/* <Environment preset="city" /> */}
      {/* Temp */}
      <OrbitControls />
      {/* / temp */}

      {/* <PresentationControls
          global
          rotation={ [ 0.13, 0.1, 0 ] }
          polar={ [ - 0.4, 0.2 ] }
          azimuth={ [ -1, 0.75 ] }
          config={ { mass: 2, tension: 400 } }
          snap={ { mass: 4, tension: 400 } }
      > */}
        {ready && <PositionalAudio autoplay loop url="./assets/mp3/1.mp3" distance={ 30 } />}
        <World />

      {/* </PresentationControls> */}
  </group>
      
  </>
  )
}
