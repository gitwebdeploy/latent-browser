import { type ReactNode } from 'react'
import { onlyText } from 'react-children-utilities'
import ReactMarkdown from 'react-markdown'

import { useProps } from '~/hooks'
import { Component } from '~/plugins/types'
import { Loose } from '~/types'

interface Props {
  children: ReactNode
}

const defaults = {
  children: '',
}

export const md: Component = {
  component: (looseProps: Loose<Props>) => {
    const { children } = useProps<Props>(looseProps, defaults)

    // note: the prose color could be a param
    return <ReactMarkdown className="prose prose-sm lg:prose-base xl:prose-lg 2xl:prose-xl prose-zinc">{onlyText(children)}</ReactMarkdown> 
  },
  doc: 'Markdown content',
}

