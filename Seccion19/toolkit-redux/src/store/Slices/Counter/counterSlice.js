import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 10,
} //Value va a ser el nombre que reciba el atributo del Redux cuando se almacena en el store

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state,Amount) => {
      state.value += Amount.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions // Las acciones a devolver son los reduxers definidos en el objeto

export default counterSlice.reducer