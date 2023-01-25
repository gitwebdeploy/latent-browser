import { useEffect, useMemo, useState } from 'react'
import { useInterval } from '@mantine/hooks'

import { useMouseDown, useMousePosition } from '~/hooks'
import { ComponentTree } from '~/prompts'

import { useComponentTree } from '~/core/hooks'
import { AppContext } from '~/core/context'

import { renderTree } from './render'

export const TreeRenderer = ({
  children,
}: {
  children?: string | ComponentTree
}) => {
  const tree = useComponentTree(children)

  // warning: this is very costly, so I will have to memoize everything that has no
  // variable params
  // I will have to find a more efficient way to re-render the scene, especially the WebGL
  // elements
  const { x, y } = useMousePosition()
  const down = useMouseDown()
  // const forceRefresh = useDebounce(`${x} ${y} ${down}`, 50)

  const [seconds, setSeconds] = useState(0)
  const interval = useInterval(() => setSeconds((s) => s + 1), 1000)

  useEffect(() => {
    interval.start()
    return interval.stop
  }, [])

  // use "seconds" to force a re-rendering every X seconds
  const forceRefresh = false // seconds

  const content = useMemo(
    () => renderTree({ children: tree }),
    [tree, forceRefresh]
  )

  return <AppContext.Provider value={{}}>{content}</AppContext.Provider>
}
