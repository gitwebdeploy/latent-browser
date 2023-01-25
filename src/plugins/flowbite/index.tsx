import { type Plugin } from '../types'

import * as api from './components'

// note: for theming see:
// https://flowbite-react.com/theme
// https://flowbite-react.com

export const name = 'ui'

export const flowbite: Plugin = {
  name,
  examples: {},
  api,
}
