import { Loose } from '~/types'

import { evaluate } from './evaluate'

export const evaluateParams = <T>(props: Loose<T>, defaults: T): T =>
  Object.entries(Array.isArray(props) ? {} : props || {}).reduce(
    (acc, [key, value]) => {
      // TODO: work on useProps is currently on hold
      // because it is more complicated thant I though,
      // we can't simply re-render a child we need to re-render the whole template,
      // otherwise we may miss some lone eval blocks

      const { result, isDynamic } = evaluate(value as any, defaults[key])
      // what we wanted to do here was to implement variable watching
      // or polling or something, whenever the prop change
      // eg:
      // if isDynamic --> add to watch list
      // do a setState

      return {
        ...acc,
        [key]: result,
      }
    },
    {} as T
  )
