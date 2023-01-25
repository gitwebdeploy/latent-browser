import { Children, ReactNode } from 'react'
import { onlyText } from 'react-children-utilities'

import { Content } from '~/components'
import { type Component } from '~/types'

const Page = ({
  children,
  type,
}: {
  children?: ReactNode
  type?: ReactNode
}): JSX.Element => {
  const nbItems = Children.toArray(children).length

  const layoutType = onlyText(type) === 'app' ? 'flex-row' : 'flex-col'

  return (
    <div
      className={[
        'bg-primary-background h-screen w-screen flex overflow-hidden',
        layoutType,
      ].join(' ')}
    >
      {children}
    </div>
  )
}

export const page: Component = {
  component: Page,
  doc: 'webpage',
  params: {
    t: {
      prop: 'type',
      doc: 'layout type eg. "site" (for corpo websites, landing pages etc), "app" (for mobile, desktop and web apps, utilities..) or "full" for fullscreen games',
      // values: ['site', 'app', 'full']
    },
    pri: {
      prop: 'primary',
      doc: 'primary color for normal text',
    },
    sec: {
      prop: 'secondary',
      doc: 'secondary color for non-important text',
    },
    fg: {
      prop: 'foreground',
      doc: 'foreground color (for containers)',
    },
    bg: {
      prop: 'background',
      doc: 'background color (for the whole page)',
    },
    accent: {
      doc: 'accent/highlight color',
    },
  },
}
