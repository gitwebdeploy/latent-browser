import { ReactNode } from 'react'
import { onlyText } from 'react-children-utilities'

import { type Component } from '~/plugins/types'

const Dialog = ({ children }: { children?: ReactNode }) => <div>{children}</div>

export const input: Component = {
  component: Dialog,
  doc: 'input',
  allowedParents: 'ui',
  allowedChildren: null,
}
