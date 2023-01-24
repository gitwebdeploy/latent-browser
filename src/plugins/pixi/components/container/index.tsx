import { ReactNode } from 'react'
import { Container as PContainer } from 'react-pixi-fiber'

import { Component } from '~/plugins/types'

const Container = ({ children }: { children?: ReactNode }) => (
  <PContainer x={150} y={150} {...{ children }} />
)

export const container: Component = {
  component: Container,
  doc: 'PIXI container',
}
