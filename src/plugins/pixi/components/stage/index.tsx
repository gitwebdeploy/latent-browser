import { ReactNode, useContext } from 'react'

// the /index.js import is necessary due to a bug, see:
// https://github.com/michalochman/react-pixi-fiber/issues/247#issuecomment-1027893254
// https://gitter.im/react-pixi-fiber/Lobby?at=6355496d0a8c6e22a1d6bd82
import { Stage as PStage } from 'react-pixi-fiber/index.js'

import { useElementSize } from '~/hooks'
import { Component } from '~/types'
import { parseColor, parseNumber } from '~/utils'
import { AppContext } from '~/core/context'

const Stage = ({
  children,
  height,
  backgroundColor,
}: {
  children?: ReactNode
  height?: string | number
  backgroundColor?: string
}) => {
  const [containerRef, { width }] = useElementSize()
  const value = useContext(AppContext)

  return (
    <div ref={containerRef} className="w-full">
      <PStage
        // not sure what it does, since we still get events when not definihing this
        interactive
        options={{
          autoDensity: true,
          backgroundColor: parseColor(backgroundColor, '#ffffff'),
          width: width,
          height: parseNumber(height, 600),
        }}
        onPointerMove={(e) => {
          console.log(e)
          const nativeEvent = e.nativeEvent
          const mouseX = nativeEvent.offsetX
          const mouseY = nativeEvent.offsetY
        }}
      >
        {children}
      </PStage>
    </div>
  )
}

export const stage: Component = {
  component: Stage,
  doc: 'PIXI stage',
  params: {
    b: {
      prop: 'backgroundColor',
      doc: 'background color',
    },
    h: {
      prop: 'height',
      doc: 'height',
    },
  },
}
