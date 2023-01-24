import { type Plugin } from '~/plugins/types'
import * as api from './components'

export const name = 'mu'

export const music: Plugin = {
  name,
  examples: {},
  api,
}
