import { createSlice } from '@reduxjs/toolkit'
import { Transaction } from '../../@types'

const INITIAL_STATE = {
  transactions: [] as Transaction[],
}

export const transactionSlice = createSlice({
  name: 'wallet',
  initialState: INITIAL_STATE,
  reducers: {
    fetchTransactions: (state) => {
      const transactions = window.localStorage.getItem('@garupa:transactions')

      if (transactions) {
        state.transactions = JSON.parse(transactions)
      }
    },

    addTransaction: (state, action) => {
      const newTransaction = {
        id: state.transactions.length,
        ...action.payload,
      }

      state.transactions.push(newTransaction)

      localStorage.setItem(
        '@garupa:transactions',
        JSON.stringify(state.transactions),
      )
    },
  },
})

export const { fetchTransactions, addTransaction } = transactionSlice.actions

export default transactionSlice.reducer
