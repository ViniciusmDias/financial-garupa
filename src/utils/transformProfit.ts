export const transformProfit = (value: number) => {
  if (value > 0) {
    return '[Lucro]'
  }
  if (value < 0) {
    return '[Perda]'
  }

  return ''
}
