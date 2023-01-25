import { Children, ReactNode } from 'react'
import { onlyText } from 'react-children-utilities'

import { useProps } from '~/hooks'
import { Component } from '~/plugins/types'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '~/components/shadcn-ui'
import { Loose } from '~/types'

interface Props {
  label: string
  children: ReactNode
}

const defaults = {
  label: 'Menu',
  children: [],
}

export const menubar: Component = {
  component: (looseProps: Loose<Props>) => {
    const { label, children } = useProps<Props>(looseProps, defaults)

    return (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>{onlyText(label)}</MenubarTrigger>
          <MenubarContent>
            {Children.map(Children.toArray(children), (child, index) => (
              <MenubarItem key={index}>{onlyText(child)}</MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  },
  doc: 'menubar',
  params: {
    l: {
      doc: 'label',
      prop: 'label',
    },
  },
  allowedParents: 'ui',
  allowedChildren: null,
}
