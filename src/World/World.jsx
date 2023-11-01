import { SpotLight, Float } from '@react-three/drei'
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
import { Robot1 } from '../Models/Robot1'
import { Man1 } from '../Models/People/Man1'
import { Man2 } from '../Models/People/Man2'
import { Jonny } from '../Models/Jonny'
import { Cybergirl } from '../Models/People/Cybergirl'

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

            {/* Robots on stage */}
            <Float>
                <Robot1 
                    position={ [ 5.6, 4.5, - 4 ] }
                    rotation-y={ - Math.PI * 0.15 }
                />
            </Float>
            
            <Jonny 
                scale={ 1.5 }
                position-y={ 1 }
            />

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
                <SpotLight
                    castShadow
                    position={ [ - 5.8, 6, 2.8  ] }
                    //rotation-y={ - Math.PI * 1 }
                    intensity={ 0.5 }
                    angle={Math.PI / 10}
                    color={ '#3d3d3d' }
                />
            </group>

            <group>
                <Spot 
                    position={ [ 6, 6.55, 3.2 ] }
                    rotation-y={ - Math.PI * 0.8 }
                />
                <SpotLight
                    castShadow
                    position={ [ 5.8, 6, 2.8  ] }
                    //rotation-y={ - Math.PI * 1 }
                    intensity={ 0.5 }
                    angle={Math.PI / 10}
                    color={ '#3d3d3d' }
                />
            </group>

            <group>
                <Cybergirl 
                    scale={ 1.5 }
                    position={ [ 0, 0, 5 ] }
                    rotation-y={ Math.PI * 1 }
                />

                {/* <Woman1
                    scale={ 0.5 }
                    position={ [ 0, 0, 5 ] }
                    rotation-y={ Math.PI * 1 }
                /> */}
                <Woman2 
                    scale={ 0.5 }
                    position={ [ - 2, 0, 5.4 ] }
                    rotation-y={ Math.PI * 1 }
                />
                <Man1 
                    scale={ 0.5 }
                    position={ [ - 3.4, 0, 6 ] }
                    rotation-y={ Math.PI * 0.9 }
                />
                <Man2 
                    scale={ 0.5 }
                    position={ [ 3, 0, 6 ] }
                    rotation-y={ Math.PI * 1.05 }
                />
            </group>
            

        </group>
    </>
}