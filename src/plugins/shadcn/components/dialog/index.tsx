import { ReactNode } from 'react'

import { type Component } from '~/types'

const Dialog = ({ children }: { children?: ReactNode }) => <div>{children}</div>

export const dialog: Component = {
  component: Dialog,
  doc: 'dialog',
  allowedParents: 'ui',
  allowedChildren: null,
}
