import { useEffect, useState } from 'react'
import useAnimationFrame from 'use-animation-frame'

import { Loose } from '~/types'

import { evaluateParams, hasDynamicContent } from '../utils'

// special hook that transform "raw" string props into "clean" props
// it also handle watches the reference, to re-run again if something changed
export const useProps = <T>(
  /**
   * Loosely typed parameters (ReactNode)
   */
  props: Loose<T>,

  /**
   * Default parameters
   */
  defaults: T,

  /**
   * Whether to allow dynamic parameters
   */
  allowDynamic: boolean = true
): T => {
  const [isDynamic, setDynamic] = useState(false)
  const [data, setData] = useState<T>(defaults)

  useAnimationFrame(({ delta }) => {
    if (!isDynamic) {
      return
    }
    // console.log('tick')
    const newProps = evaluateParams(props, defaults)

    let hasChanged = false
    for (const [key, value] of Object.entries(newProps)) {
      if (data[key] !== value) {
        hasChanged = true
        // console.log(`${key}: ${value} has changed (was ${data[key]} before)`)
        break
      }
    }
    if (hasChanged) {
      setData(newProps)
      // console.log('re-rendering ' + newFingeprint)
    }
  })

  // if we are not dynamic, we run it only once
  useEffect(() => {
    // first let's promptly eval it at least once
    // TODO optimization:
    // we should only evaluate props that can change, and not the others
    const newProps = evaluateParams(props, defaults)

    setData(newProps)

    // then let's see if we should regularly update props
    setDynamic(allowDynamic && hasDynamicContent(props))

    /*
    console.log('debug:', {
      allowDynamic,
      hasDynamicContent: hasDynamicContent(props),
      props,
    })
    */
  }, []) // put something in here?

  return data
}
