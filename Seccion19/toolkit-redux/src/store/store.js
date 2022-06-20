import { configureStore } from '@reduxjs/toolkit'
import {counterSlice} from './Slices/Counter/counterSlice'
import { pokemonSlice } from './Slices/pokemon/pokemonSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons:pokemonSlice.reducer
  },
})