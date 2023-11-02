import { SpotLight, Float, Image } from '@react-three/drei'
import { Mic } from'../Models/Mic'
import { Speaker } from '../Models/Speaker'
import { Stage } from '../Models/Stage'
import { Platform } from '../Models/Platform'
import { Spotlight } from '../Models/Spotlight'
import { useRef } from 'react'
import { Spot } from '../Models/Spot'
import { Barricade } from '../Models/Barricade'
import { Robot1 } from '../Models/Robot1'
import { Jonny } from '../Models/Jonny'
import { Cybergirl } from '../Models/People/Cybergirl'
import { Cyberguy } from '../Models/People/Cyberguy'

export default function World()
{
    const micRef = useRef()

    return <>
        <group>
            <group>
                {/* Base stage */}
                <Stage
                    scale={ 0.5 }
                    position={ [ 0, 0, - 6 ] }
                >
                </Stage>
                <Image 
                    url='./assets/images/samurai.png'
                    transparent 
                    opacity={ 1 }
                    position={ [ 0, 3.4, - 5.8 ] }
                    scale={ 5 }
                />
            </group>

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
                {/* Cyber woman 1 */}
                <Cybergirl 
                    scale={ 1.5 }
                    position={ [ 0, 0, 5 ] }
                    rotation-y={ Math.PI * 1 }
                />

                {/* Cyber guy 1 */}
                <Cyberguy 
                    scale={ 1.5 }
                    position={ [ - 3.4, 0, 6 ] }
                    rotation-y={ Math.PI * 0.9 }
                />
                
            </group>
            

        </group>
    </>
}