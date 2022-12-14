export interface Transaction {
  id: string
  type: 'Compra' | 'Venda'
  name: string
  value: number
}

export interface Wallet {
  wallet: {
    transactions: Transaction[]
  }
}
