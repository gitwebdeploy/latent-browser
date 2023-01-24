import { ReactNode } from 'react'
import { onlyText } from 'react-children-utilities'

import { type Component } from '~/plugins/types'

const Input = ({ children }: { children?: ReactNode }) => <input type="checkbox" />

export const input: Component = {
  component: Input,
  doc: 'input',
  allowedParents: 'ui',
  allowedChildren: null,
}
