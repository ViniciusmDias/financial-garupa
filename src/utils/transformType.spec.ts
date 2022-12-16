import { transformType } from './transformType'

describe('Transform Type', () => {
  it('When receive a text Compra, returns profit type +', () => {
    const profit = 'Compra'

    const type = transformType(profit)

    const expectedValue = '+'

    expect(type).toEqual(expectedValue)
  })

  it('When receive a text Perda, returns profit type -', () => {
    const profit = 'Venda'

    const type = transformType(profit)

    const expectedValue = '-'

    expect(type).toEqual(expectedValue)
  })
})
