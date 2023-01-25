import { cloneElement, ReactNode } from 'react'

import { Component } from '~/types'

const Mouse = ({ children }: { children?: ReactNode }): JSX.Element => {
  return cloneElement(children as any, {})
}

export const mouse: Component = {
  component: Mouse,
  doc: 'give access to mouseX and mouseY',
}
