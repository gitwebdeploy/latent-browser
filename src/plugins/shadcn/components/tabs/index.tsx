import { ReactNode } from 'react'
import { onlyText } from 'react-children-utilities'

import { type Component } from '~/plugins/types'

const Tab = ({ children }: { children?: ReactNode }) => <div>{children}</div>

const Tabs = ({ children }: { children?: ReactNode }) => <div>{children}</div>

export const tabs: Component = {
  component: Tabs,
  doc: 'tabs',
  allowedParents: 'ui',
  allowedChildren: null,
}

export const tab: Component = {
  component: Tab,
  doc: 'tab',
  allowedParents: 'ui',
  allowedChildren: null,
}
