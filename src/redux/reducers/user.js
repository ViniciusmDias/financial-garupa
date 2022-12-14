// Esse reducer será responsável por tratar as informações da pessoa usuária

import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  email: '', // string que armazena o email da pessoa usuária
}

export const loginSlice = createSlice({
  name: 'login',
  initialState: INITIAL_STATE,
  reducers: {
    login: (state, action) => {
      state.email = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { login } = loginSlice.actions

export default loginSlice.reducer
