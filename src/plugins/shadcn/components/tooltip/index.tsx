import { ReactNode } from 'react'
import { onlyText } from 'react-children-utilities'

import { type Component } from '~/plugins/types'

const Tooltip = ({ children }: { children?: ReactNode }) =>
  <div>{onlyText(children)}</div>

export const tooltip: Component = {
  component: Tooltip,
  doc: 'tooltip',
  allowedParents: 'ui',
  allowedChildren: null,
}