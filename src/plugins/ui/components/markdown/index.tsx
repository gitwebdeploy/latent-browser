import { type ReactNode } from 'react'
import { onlyText } from 'react-children-utilities'
import ReactMarkdown from 'react-markdown'

import { type Component } from '~/plugins/types'

export const md: Component = {
  component: ({ children }: { children?: ReactNode }) => (
    <ReactMarkdown>{onlyText(children)}</ReactMarkdown> 
  ),
  doc: 'Markdown content',
}

