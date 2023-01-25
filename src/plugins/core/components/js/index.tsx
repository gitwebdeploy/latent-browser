import { ReactNode } from 'react'
import { onlyText } from 'react-children-utilities'

import { type Component } from '~/types'
import { useEval } from '~/core/hooks'

const JS = ({ children }: { children?: ReactNode }): JSX.Element => {
  useEval(onlyText(children))

  return undefined
}

export const js: Component = {
  component: JS,
  doc: 'JS one-liner expression passed to eval()',
}
