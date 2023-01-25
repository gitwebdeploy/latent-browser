import { ReactNode } from 'react'
import { onlyText } from 'react-children-utilities'

import { useProps } from '~/hooks'
import { Component } from '~/plugins/types'
import { Avatar, AvatarImage, AvatarFallback } from '~/components/shadcn-ui'
import { useImage } from '~/hooks'
import { Loose } from '~/types'

interface Props {
  children: ReactNode
  fallback: string
}

const defaults = {
  children: '',
  fallback: 'LI', // for "Latent Image"
}

export const avatar: Component = {
  component: (looseProps: Loose<Props>) => {
    const { children, fallback } = useProps<Props>(looseProps, defaults)
    const alt = `avatar of ${onlyText(children)}`
    const src = useImage({ alt })

    return (
      <Avatar>
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
    )
  },
  doc: 'avatar',
  allowedParents: 'ui',
  allowedChildren: null,
}
