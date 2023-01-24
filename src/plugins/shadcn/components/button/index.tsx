import { ReactNode } from 'react'
import { onlyText } from 'react-children-utilities'

import { type Component } from '~/plugins/types'

const Button = ({ children }: { children?: ReactNode }) => <button>{onlyText(children)}</button>

export const button: Component = {
  component: Button,
  doc: 'button',
  allowedParents: 'ui',
  allowedChildren: null,
}
