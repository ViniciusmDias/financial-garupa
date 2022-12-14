// configure aqui sua store

import { configureStore } from '@reduxjs/toolkit'
import { transactionSlice } from './reducers/transactions'

const store = configureStore({
  reducer: {
    wallet: transactionSlice.reducer,
  },
})

export default store
