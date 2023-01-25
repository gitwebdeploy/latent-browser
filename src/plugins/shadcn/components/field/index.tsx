import { Input, Label } from '~/components/shadcn-ui'
import { useProps } from '~/hooks'
import { toggle } from '~/plugins/common'
import { Component } from '~/plugins/types'
import { Loose } from '~/types'

interface Props {
  id: string
  label: string
  disabled: boolean
  placeholder: string
  type: string
  value: string
}

const defaults = {
  id: '',
  label: '',
  disabled: false,
  placeholder: '',
  type: 'text', // email, number, text
  value: '',
}

const FormField = (looseProps: Loose<Props>) => {
  const { id, label, value, ...props } = useProps(looseProps, defaults)

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input
        // {...props}
        id={id}
        name={id}
        // onChange={() => console.log('TODO')}
      />
    </div>
  )
}

export const field: Component = {
  component: FormField,
  doc: 'form field',
  params: {
    l: {
      prop: 'label',
      doc: 'label',
    },
    i: {
      prop: 'id',
      doc: 'id',
    },
    d: {
      prop: 'disabled',
      doc: 'disabled',
      values: toggle,
    },
    t: {
      prop: 'type',
      doc: 'type',
      values: ['number', 'text', 'email'],
    },
    p: {
      prop: 'placeholder',
      doc: 'placeholder',
    },
  },
}
