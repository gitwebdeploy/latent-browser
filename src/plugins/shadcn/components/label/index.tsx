import { ReactNode } from 'react'
import { onlyText } from 'react-children-utilities'

import { type Component } from '~/plugins/types'

const Label = ({ children, htmlFor }: { children?: ReactNode; htmlFor?: ReactNode }) =>
  <label htmlFor={onlyText(htmlFor)}>{
    onlyText(children)
  }</label>

export const textarea: Component = {
  component: Label,
  doc: 'label',
  allowedParents: 'ui',
  allowedChildren: null,
  params: {
    f: {
      prop: 'htmlFor',
      doc: 'htmlFor'
    },
  }
}