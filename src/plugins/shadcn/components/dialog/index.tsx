import { ReactNode } from 'react'

import { type Component } from '~/plugins/types'

const Dialog = ({ children }: { children?: ReactNode }) => <div>{children}</div>

export const dialog: Component = {
  component: Dialog,
  doc: 'dialog',
  allowedParents: 'ui',
  allowedChildren: null,
}
