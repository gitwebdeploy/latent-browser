import { useEffect, useState } from 'react'
import { usePixiTicker } from 'react-pixi-fiber'

import { Loose } from '~/types'
import { evaluateParams } from '~/utils'
import { hasDynamicContent } from '~/utils/hasDynamicContent'

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
  const [data, setData] = useState<{
    props: T
    fingerprint: string
  }>({
    props: defaults,
    fingerprint: '',
  })

  usePixiTicker(
    isDynamic
      ? () => {
          // console.log('tick')
          const newProps = evaluateParams(props, defaults)
          const newFingeprint = JSON.stringify(newProps)
          if (data.fingerprint !== newFingeprint) {
            setData({
              props: newProps,
              fingerprint: newFingeprint,
            })
            console.log('re-rendering ' + newFingeprint)
          }
        }
      : undefined
  )

  // if we are not dynamic, we run it only once
  useEffect(() => {
    // first let's promptly eval it at least once
    // TODO optimization:
    // we should only evaluate props that can change, and not the others
    const newProps = evaluateParams(props, defaults)
    const newFingeprint = JSON.stringify(newProps)
    setData({
      props: newProps,
      fingerprint: newFingeprint,
    })

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

  return data.props
}
