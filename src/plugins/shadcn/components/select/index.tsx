import { ReactNode } from 'react'
import { onlyText } from 'react-children-utilities'

import { type Component } from '~/plugins/types'

const Option = ({ children, value }: { children?: ReactNode; value?: ReactNode }) =>
  <option value={onlyText(value)}>{onlyText(children)}</option>

const Select = ({ children, id }: { children?: ReactNode; id?: ReactNode }) =>
  <select id={onlyText(id)} name={onlyText(id)}>{
    children
  }</select>

export const select: Component = {
  component: Select,
  doc: 'select',
  allowedParents: 'ui',
  allowedChildren: null,
  params: {
    i: {
      prop: 'id',
      doc: 'id'
    }
  }
}


export const option: Component = {
  component: Option,
  doc: 'option',
  allowedParents: 'ui',
  allowedChildren: null,
  params: {
    v: {
      prop: 'value',
      doc: 'value'
    }
  }
}