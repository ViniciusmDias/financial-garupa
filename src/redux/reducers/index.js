// import user from './user';
// import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

import { combineReducers, configureStore } from '@reduxjs/toolkit'

import user from './user'
import wallet from './wallet'

export const rootReducer = combineReducers({
  user,
  wallet,
})

export const store = configureStore({
  reducer: rootReducer,
})
