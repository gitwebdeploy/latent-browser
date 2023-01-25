import { ReactNode } from 'react'

import { useProps } from '~/hooks'
import { type Component } from '~/plugins/types'
import { Button } from '~/components/shadcn-ui'

interface Props {
  children: ReactNode
}

const defaults = {
  children: '',
}

export const button: Component = {
  component: (looseProps: Props) => {
    const { children, ...props } = useProps<Props>(looseProps, defaults)

    return <Button {...props}>{children}</Button>
  },
  doc: 'button',
  allowedParents: 'ui',
  allowedChildren: null,
}
