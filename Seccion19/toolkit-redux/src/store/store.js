import { configureStore } from '@reduxjs/toolkit'
import {counterSlice} from './Slices/Counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  },
})