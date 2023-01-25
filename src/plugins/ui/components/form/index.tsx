import { ReactNode } from 'react'

import { Component } from '~/types'

const Form = ({ children }: { children?: ReactNode }) => (
  <form className="flex flex-col gap-4">{children}</form>
)
export const form: Component = {
  component: Form,
  doc: 'form',
}
