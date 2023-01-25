import { ReactNode } from 'react'

import { useProps } from '~/core/hooks'
import { Component } from '~/types'
import { Loose } from '~/types'

interface Props {
  children: ReactNode
  htmlFor: string
}

const defaults = {
  children: null,
  htmlFor: '',
}

const Label = (looseProps: Loose<Props>) => {
  const { htmlFor, children } = useProps(looseProps, defaults)

  return <Label htmlFor={htmlFor}>{children}</Label>
}

export const label: Component = {
  component: Label,
  doc: 'label',
  allowedParents: 'ui',
  allowedChildren: null,
  params: {
    f: {
      prop: 'htmlFor',
      doc: 'htmlFor',
    },
  },
}
