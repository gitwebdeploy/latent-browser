import { ReactNode } from 'react'
import { Stage as PStage } from 'react-pixi-fiber'
import { useElementSize } from '~/hooks'

import { Component } from '~/plugins/types'
import { parseColor, parseNumber } from '~/utils'

const Stage = ({
  children,
  height,
  backgroundColor,
}: {
  children?: ReactNode
  height?: string | number
  backgroundColor?: string
}) => {
  // const ref = useRef()
  const [ref, { width }] = useElementSize()

  return (
    <div ref={ref} className="w-full">
      <PStage
        options={{
          autoDensity: true,
          // resizeTo: ref.current, // window,
          backgroundColor: parseColor(backgroundColor, '#ffffff'),
          width: width,
          height: parseNumber(height, 600),
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
