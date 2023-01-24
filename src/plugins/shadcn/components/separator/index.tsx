import { type Component } from '~/plugins/types'

const Separator = () =>
  <div />

export const separator: Component = {
  component: Separator,
  doc: 'separator',
  allowedParents: 'ui',
  allowedChildren: null,
}