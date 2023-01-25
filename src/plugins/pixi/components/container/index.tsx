import { ReactNode } from 'react'

// the /index.js import is necessary due to a bug, see:
// https://github.com/michalochman/react-pixi-fiber/issues/247#issuecomment-1027893254
// https://gitter.im/react-pixi-fiber/Lobby?at=6355496d0a8c6e22a1d6bd82
import { Container as PContainer } from 'react-pixi-fiber/index.js'

import { Component } from '~/types'

const Container = ({ children }: { children?: ReactNode }) => (
  <PContainer x={150} y={150} {...{ children }} />
)

export const container: Component = {
  component: Container,
  doc: 'PIXI container',
}
