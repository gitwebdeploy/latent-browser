import { ReactNode } from 'react'
import { onlyText } from 'react-children-utilities'

import { type Component } from '~/plugins/types'

const Textarea = ({ children, id }: { children?: ReactNode; id?: ReactNode }) =>
  <textarea id={onlyText(id)} name={onlyText(id)} value={onlyText(children)} />

export const textarea: Component = {
  component: Textarea,
  doc: 'textarea',
  allowedParents: 'ui',
  allowedChildren: null,
  params: {
    i: {
      prop: 'id',
      doc: 'id'
    }
  }
}