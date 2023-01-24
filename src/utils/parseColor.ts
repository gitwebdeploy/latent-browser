export const parseColor = (value: any, defaultColor: string) => {
  const color = `${value}`.match(/#/) ? `${value}` : defaultColor
  return parseInt(color.replace(/#/, '0x'))
}
