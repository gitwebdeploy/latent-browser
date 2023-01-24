import { ReactNode, memo } from 'react'
import { Canvas } from '@react-three/fiber'

import { type Component } from '~/plugins/types'

import { Environment1 } from '../../primitives/environments'
import { Shadows } from '../../primitives/shadows'
import { Orbit } from '../../primitives/controls/Orbit'

// to find environments:
// https://polyhaven.com/hdris

const Scene = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="w-full h-screen">
      <Canvas shadows camera={{ position: [0, 0, 12], fov: 30 }}>
        <Environment1 />
        {children}
        <Shadows />
        <Orbit />
      </Canvas>
    </div>
  )
}

export const scene: Component = {
  component: memo(Scene),
  doc: 'WebGL canvas used for 3D apps, games & simulators',
  allowedChildren: 'fb',
}
