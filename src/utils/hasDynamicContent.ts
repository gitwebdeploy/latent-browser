export const hasDynamicContent = (input: any) => {
  try {
    const matches = JSON.stringify(input).match(/⎝([^⎞]+)⎞/)
    const match = matches?.[1]
    return !!match
  } catch (err) {
    return false
  }
}
