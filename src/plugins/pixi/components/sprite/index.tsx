import { ReactNode, useEffect, useState } from 'react'
import { onlyText } from 'react-children-utilities'
import { Sprite as PSprite, usePixiTicker } from 'react-pixi-fiber'

import { Component } from '~/plugins/types'
import { useLatentPixiTexture } from '~/hooks/useLatentPixiTexture'
import { useProps } from '~/hooks'
import { Loose } from '~/types'

interface Props {
  children: ReactNode
  anchor: number
  x: number
  y: number
  width: number
  height: number
  rotation: number
}

const defaults: Props = {
  children: null,
  anchor: 0,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  rotation: 0,
}

const Sprite = (looseProps: Loose<Props>) => {
  const { children, ...props } = useProps<Props>(looseProps, defaults)
  const [rot, setRotation] = useState(0)
  const texture = useLatentPixiTexture({
    alt: `sprite of ${onlyText(children)}`,
  })
  usePixiTicker((delta) => {
    setRotation(rot + 0.01 * delta)
  })

  return (
    <PSprite
      {...defaults}
      texture={texture}
      anchor={props.anchor}
      x={props.x}
      y={props.y}
      width={props.width || undefined}
      height={props.height || undefined}
      rotation={rot || 0}
    />
  )
}

export const sprite: Component = {
  component: Sprite,
  doc: 'sprite',
  params: {
    a: {
      prop: 'anchor',
      doc: 'anchor',
    },
    x: {
      doc: 'x position',
    },
    y: {
      doc: 'y position',
    },
    w: {
      prop: 'width',
      doc: 'width',
    },
    h: {
      prop: 'height',
      doc: 'height',
    },
    r: {
      prop: 'rotation',
      doc: 'rotation',
    },
  },
}
