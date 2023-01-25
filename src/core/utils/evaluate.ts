import { ReactNode } from 'react'
import { onlyText } from 'react-children-utilities'

import { appContext } from '~/core/context'

const history: string[] = []

export const runInContext = (ctx: any, src: string) => {
  return new Function(...Object.keys(ctx), src)(...Object.values(ctx))
}

export const evaluate = <T>(
  input: ReactNode,
  defaultValue: T
): { result: any; isDynamic: boolean } => {
  const src = onlyText(input)
  try {
    // now it's time to interpret some JS, if any
    const matches = src.match(/⎝([^⎞]+)⎞/)
    const js = matches?.[1]
    if (!js) {
      /*
      console.log('not JS, skipping..', {
        src,
        matches,
        js,
      })
      */

      // we still try one last time to extract numbers and booleans

      const candidateNumber = Number(src)
      const isNumber = !isNaN(candidateNumber) && isFinite(candidateNumber)
      if (isNumber) {
        return { result: candidateNumber, isDynamic: false }
      }
      const candidateBoolean = src.toLowerCase()
      if (candidateBoolean === 'true') {
        return { result: true, isDynamic: false }
      } else if (candidateBoolean === 'false') {
        return { result: false, isDynamic: false }
      }

      // ok so this was not a string but actual ReactNode children maybe,
      // so let's leave the original content untouched
      return { result: input, isDynamic: false }
    }

    // console.log('evaluate: js=' + js)
    history.push(js)

    // const result = runInContext(tmpContext, js)
    const result = eval?.(js) // runInContext(tmpContext, js)
    // console.log('evaluate:result=' + JSON.stringify(result, null, 2))

    // we can't remove this JSON.stringify, or else the application doesn't work anymore!
    JSON.stringify(appContext, null, 2)

    return {
      result: src.replace(/⎝([^⎞]+)⎞/, result),

      // we are only certified "dynamic" if we base ourselves on other variables
      // in other terms, to be dynamic the code must include $someVariable
      isDynamic: !!js.match(/\$[a-zA-Z_]+/),
    }
  } catch (exc) {
    // console.log('failed to eval: ' + exc)

    return {
      result: src.replace(/⎝([^⎞]+)⎞/, `${defaultValue}`),
      isDynamic: false,
    }
  }
}
