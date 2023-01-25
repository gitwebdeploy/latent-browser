import { type ReactNode } from 'react'
import { useProps } from '~/hooks'
import { type Component } from '~/plugins/types'
import { Loose } from '~/types'

interface Props {
  children: ReactNode
}

const defaults = {
  children: '',
}

export const p: Component = {
  component: (looseProps: Loose<Props>) => {
    const { children } = useProps<Props>(looseProps, defaults)
    
    return (
      <p className="text-gray-900 font-extralight text-sm">{children}</p>
    )
  },
  doc: 'paragraph',
}
