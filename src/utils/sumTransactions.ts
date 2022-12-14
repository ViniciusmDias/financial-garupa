import { Transaction } from '../@types'

export function sumTransactions(transactions: Transaction[]) {
  if (transactions.length === 0) return 0

  const newtransactionValues = transactions.map((transaction) => {
    if (transaction.type === 'Venda') {
      return Number(-transaction.value)
    }
    return Number(transaction.value)
  })

  const totalValue = newtransactionValues.reduce((a, b) => a + b, 0)

  return totalValue
}
