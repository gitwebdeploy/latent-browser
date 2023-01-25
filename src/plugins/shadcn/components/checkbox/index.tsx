import { Checkbox } from '~/components/shadcn-ui'
import { useProps } from '~/hooks'
import { toggle } from '~/plugins/common'
import { type Component } from '~/plugins/types'
import { Loose } from '~/types'

interface Props {
  id: string
  disabled: boolean
}

const defaults = {
  id: '',
  disabled: false,
}

export const checkbox: Component = {
  component: (looseProps: Loose<Props>) => {
    const { id, disabled } = useProps(looseProps, defaults)

    return <Checkbox id={id} disabled={disabled} />
  },
  doc: 'checkbox',
  allowedParents: 'ui',
  allowedChildren: null,
  params: {
    i: {
      doc: 'id',
      prop: 'id',
    },
    d: {
      doc: 'disabled',
      prop: 'disabled',
      values: toggle,
    }
  }
}
