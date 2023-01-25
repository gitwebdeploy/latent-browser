import { core } from './core'
import { ui } from './ui'
import { daisyui } from './daisyui'
import { shadcn } from './shadcn'
import { flowbite } from './flowbite'
import { fiber } from './fiber'
import { pixi } from './pixi'
import { music } from './music'
import { pdf } from './pdf'
import { type Plugins } from './types'
import { getIndex, getComponents, getDocumentation } from './build'

const list = [
  core,
  // daisy ui
  // tailgrids
  ui,
  // flowbite,
  shadcn,
  fiber,
  pixi,
  // music,
  pdf
]

// plugins that have the same namespace will be merged together
// the latest in the sequence will overwrite previous entries
export const plugins: Plugins = list.reduce((acc, { name, examples, api }) => ({
  ...acc,
  [name]: {
    name,
    examples: {
      ...acc[name]?.examples,
      ...examples
    },
    api: {
      ...acc[name]?.api,
      ...api
    },
  }
}), {} as Plugins)

export const components = getComponents(plugins)
export const apiDoc = getDocumentation(plugins)
export const globalIndex = getIndex(components)

export const scopedIndexes = Object.entries(plugins).reduce(
  (acc, [name, plugin]) => ({
    ...acc,
    [name]: getIndex(
      // ok so.... getComponents wasn't designed to work on ONE plugin but hey.. it works anyway!
      getComponents({ [name]: plugin })
    ),
  }),
  {}
)
