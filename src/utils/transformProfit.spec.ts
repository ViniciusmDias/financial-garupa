import { transformProfit } from './transformProfit'

describe('Transform Profit', () => {
  it('When receive a positive number, returns Profit', () => {
    const value = 2

    const profit = transformProfit(value)

    const expectedValue = '[Lucro]'

    expect(profit).toEqual(expectedValue)
  })

  it('When receive a negative number, returns Loss', () => {
    const value = -2

    const profit = transformProfit(value)

    const expectedValue = '[Perda]'

    expect(profit).toEqual(expectedValue)
  })
})
