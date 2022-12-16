import { Transaction } from '../@types'
import { sumTransactions } from './sumTransactions'

describe('Sum transactions', () => {
  it('When receive an array of transactions, sum all transactions values', () => {
    const transactions: Transaction[] = [
      {
        id: '0',
        name: 'Lanche',
        type: 'Compra',
        value: 10,
      },
      {
        id: '1',
        name: 'Roupa',
        type: 'Venda',
        value: 8,
      },
    ]

    const totalValue = sumTransactions(transactions)

    const expectedValue = 2

    expect(totalValue).toEqual(expectedValue)
  })
})
