import { useProps } from '~/core/hooks'
import { Component } from '~/types'
import { Slider } from '~/components/shadcn-ui'
import { Loose } from '~/types'

interface Props {
  defaultValue: number
  max: number
  step: number
}

const defaults = {
  defaultValue: 1,
  max: 10,
  step: 1,
}

export const slider: Component = {
  component: (looseProps: Loose<Props>) => {
    const { defaultValue, max, step } = useProps<Props>(looseProps, defaults)

    return <Slider defaultValue={[defaultValue]} max={max} step={step} />
  },
  doc: 'slider',
  params: {
    d: {
      doc: 'default value',
      prop: 'defaultValue',
    },
    s: {
      doc: 'step',
      prop: 'step',
    },
    m: {
      doc: 'max',
      prop: 'max',
    },
  },
  allowedParents: 'ui',
  allowedChildren: null,
}
