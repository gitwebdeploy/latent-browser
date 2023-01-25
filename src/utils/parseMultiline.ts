import { replaceRef } from '@react-spring/core/dist/declarations/src/helpers'

export const parseMultiline = (input: string, marker: string) => {
  // input is like this:
  // input=ᐃ      # Resultᐃ      Result: ⎝$z⎞ᐃ      # Welcome

  const firstLinePrefix = input.match(new RegExp(`${marker}( )*`, 'g'))?.[0]

  // prefix should contain "ᐃ      " etc
  if (!firstLinePrefix) {
    return
  }

  // we count the number of padding spaces in front if the first line
  // we are going to remove this padding from ALL the lines
  // the reason we are doing this is because:
  // - YAML needs a padding for multi-line text
  // - Markdown also uses padding for code blocks, and we want to preserve that
  const padding = firstLinePrefix.replace(marker, '').length || 0

  // note: we do not directly use the user input in the RegExp as this presents a security issue
  // ie doing new RegExp(prefix) is too dangerous
  // https://sec.okta.com/articles/2020/04/attacking-evil-regex-understanding-regular-expression-denial-service
  const regex = new RegExp(`${marker} {${padding}}`, 'g')

  // now we can final remove the extra padding and restore line returns
  const output = input.replace(regex, '\n')

  return output
}
