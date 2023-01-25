import { type Plugin } from '~/types'

import * as api from './components'

export const name = 'px'

const examples = {}

export const pixi: Plugin = {
  name,
  examples,
  api,
}
