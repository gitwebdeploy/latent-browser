import { ReactNode } from 'react'

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '~/components/shadcn-ui'
import { useProps } from '~/core/hooks'
import { toggle } from '~/plugins/common'
import { Component } from '~/types'
import { Loose } from '~/types'

interface AccordionItemProps {
  value: string
  label: string
  children: ReactNode
}

const accordionItemDefaults = {
  value: '',
  label: '',
  children: null,
}

export const accordion_item: Component = {
  component: (looseProps: Loose<AccordionItemProps>) => {
    const { value, label, children } = useProps<AccordionItemProps>(
      looseProps,
      accordionItemDefaults
    )

    return (
      <AccordionItem value={value}>
        <AccordionTrigger>{label}</AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    )
  },
  doc: 'accordion item',

  params: {
    v: {
      doc: 'value',
      prop: 'value',
    },
    l: {
      doc: 'label',
      prop: 'label',
    },
  },
}

interface AccordionProps {
  children: ReactNode
  type: 'single' | 'multiple'
  collapsible: boolean
}

const accordionDefaults = {
  children: null,
  type: 'single',
  collapsible: true,
}

export const accordion: Component = {
  component: (looseProps: Loose<AccordionProps>) => {
    const { children, ...props } = useProps<AccordionProps>(
      looseProps,
      accordionDefaults as any
    )

    return <Accordion {...props}>{children}</Accordion>
  },
  doc: 'accordion',
  params: {
    t: {
      doc: 'type',
      prop: 'type',
      values: ['single', 'multiple'],
    },
    c: {
      doc: 'collapsible',
      prop: 'collapsible',
      values: toggle,
    },
  },
}
