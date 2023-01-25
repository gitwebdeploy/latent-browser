import { Input } from '~/components/shadcn-ui'
import { useProps } from '~/core/hooks'
import { toggle } from '~/plugins/common'
import { type Component } from '~/types'
import { Loose } from '~/types'

interface Props {
  id: string
  disabled: boolean
  placeholder: string
  type: string
  value: string
}

const defaults = {
  id: '',
  disabled: false,
  placeholder: '',
  type: 'text', // email
  value: '',
}

export const input: Component = {
  component: (looseProps: Loose<Props>) => {
    const props = useProps(looseProps, defaults)

    return <Input {...props} />
  },
  doc: 'input',
  allowedParents: 'ui',
  allowedChildren: null,
  params: {
    t: {
      doc: 'type',
      prop: 'type',
      values: ['text', 'number', 'email']
    },
    d: {
      doc: 'disabled',
      prop: 'disabled',
      values: toggle,
    },
    p: {
      doc: 'placeholder',
      prop: 'placeholder',
    }
  }
}
