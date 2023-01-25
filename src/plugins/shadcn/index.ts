import { type Plugin } from '~/plugins/types'

import * as api from './components'

export const name = 'ui'

export const shadcn: Plugin = {
  name,
  examples: {},
  api,
}
