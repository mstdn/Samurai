import { SpotLight } from '@react-three/drei'
import { Mic } from'../Models/Mic'
import { Speaker } from '../Models/Speaker'
import { Stage } from '../Models/Stage'
import { Platform } from '../Models/Platform'
import { Spotlight } from '../Models/Spotlight'
import { useRef } from 'react'
import { Spot } from '../Models/Spot'
import { Woman1 } from '../Models/People/Woman1'
import { Woman2 } from '../Models/People/Woman2'
import { Barricade } from '../Models/Barricade'

export default function World()
{
    const micRef = useRef()

    return <>
        <group>
            {/* Base stage */}
            <Stage
                scale={ 0.5 }
                position={ [ 0, 0, - 6 ] }
            >
            </Stage>
            {/* <mesh
                receiveShadow
                >
                <boxGeometry args={ [ 20, 0.2, 20 ] } />
                <meshStandardMaterial color="darkgray" />
            </mesh> */}


            {/* Speaker 1 */}
            <Speaker 
                position={ [ - 5.4, 1, - 4.8 ] }
                rotation-y={ Math.PI * 0.1 }
                scale={ 1.3 }
            />
            {/* Speaker 2 */}
            <Speaker 
                position={ [ 5.4, 1, - 4.8 ] }
                rotation-y={ - Math.PI * 0.1 }
                scale={ 1.3 }
            />

            {/* Mic on stage */}
            <group
                ref={ micRef }
            >
                <Mic 
                    position={ [ 0, 1, 2 ] }
                />
            </group>
            <Platform 
                scale={ 4.5 }
                position={ [ 0, - 0.1, 0 ] }
            />

            {/* Barricades */}
            <group>
                <Barricade 
                    position={ [ 0, 0, 3.5 ] }
                />
                <Barricade 
                    position={ [ 3, 0, 3.5 ] }
                />
                <Barricade 
                    position={ [ 6, 0, 3.5 ] }
                />
                <Barricade 
                    position={ [ - 3, 0, 3.5 ] }
                />
                <Barricade 
                    position={ [ - 6, 0, 3.5 ] }
                />
            </group>

            {/* Spotlights */}
            <group>
                <Spotlight 
                    position={ [ - 7.35, 0, 7.25 ] }
                    rotation-y={ Math.PI * 0.75 }
                />
                <SpotLight
                    castShadow
                    position={ [ - 7.3, 0.5, 7.2 ] }
                    rotation-y={ Math.PI * 0.8 }
                    intensity={8} 
                    angle={Math.PI / 10}
                />
            </group>
            
            <group>
                <Spotlight 
                    position={ [ 7.35, 0, 7.25 ] }
                    rotation-y={ - Math.PI * 0.75 }
                />
                <SpotLight
                    castShadow
                    position={ [ 7.3, 0.5, 7.2 ] }
                    rotation-y={ - Math.PI * 0.8 }
                    intensity={8} 
                    angle={Math.PI / 10}
                />
            </group>

            <group>
                <Spot 
                    position={ [ - 6, 6.55, 3.2 ] }
                    rotation-y={ Math.PI * 0.8 }
                />
            </group>

            <group>
                <Spot 
                    position={ [ 6, 6.55, 3.2 ] }
                    rotation-y={ - Math.PI * 0.8 }
                />
            </group>

            <group>
                <Woman1
                    scale={ 0.5 }
                    position={ [ 0, 0, 5 ] }
                    rotation-y={ Math.PI * 1 }
                />
                <Woman2 
                    scale={ 0.5 }
                    position={ [ - 2, 0, 5.4 ] }
                    rotation-y={ Math.PI * 1 }
                />
            </group>
            

        </group>
    </>
}