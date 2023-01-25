import { useMemo } from 'react'

import { ComponentTree } from '~/prompts'
import { parse } from '~/core/utils'

const getFingerpint = (input?: any) => {
  try {
    return JSON.stringify(input)
  } catch (err) {
    return ''
  }
}

export const useComponentTree = (input?: string | ComponentTree) => {
  const fingerprint = getFingerpint(input)
  const tree = useMemo(() => parse(input), [input, fingerprint])
  return tree
}
