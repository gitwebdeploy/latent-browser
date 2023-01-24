import { type Plugin } from '~/plugins/types'

import * as api from './components'

// note: for theming see:
// https://flowbite-react.com/theme
// https://flowbite-react.com

export const name = 'sh'

export const shadcn: Plugin = {
  name,
  examples: {},
  api,
}
