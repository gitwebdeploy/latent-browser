import { ReactNode } from 'react'
import { onlyText } from 'react-children-utilities'

import { type Component } from '~/plugins/types'

const Checkbox = ({ children }: { children?: ReactNode }) => <input type="checkbox" />

export const checkbox: Component = {
  component: Checkbox,
  doc: 'checkbox',
  allowedParents: 'ui',
  allowedChildren: null,
}
