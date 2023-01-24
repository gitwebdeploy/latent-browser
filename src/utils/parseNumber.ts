export const parseNumber = (input: any, defaultValue: number) => {
  const candidate = Number(input)
  if (isFinite(candidate) && !isNaN(candidate)) {
    return candidate
  } else {
    return defaultValue
  }
}
