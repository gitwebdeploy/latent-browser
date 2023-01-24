import { type ReactNode } from 'react'
import { type Component } from '~/plugins/types'

export const p: Component = {
  component: ({ children }: { children?: ReactNode }) => (
    <p className="text-gray-900 font-extralight text-sm">{children}</p>
  ),
  doc: 'paragraph',
}
