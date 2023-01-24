import { Children, ReactNode } from 'react'
import { onlyText } from 'react-children-utilities'

import { Content } from '~/components/core/Content'
import { type Component } from '~/plugins/types'

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
      // if we have only one child then we wrap it into a nice content block
      // full screen applications can just omit to call Page
    >
      {nbItems === 1 ? <Content>{children}</Content> : children}
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
