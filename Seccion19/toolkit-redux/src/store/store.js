import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { todosApi } from './apis/todosApi'
import {counterSlice} from './Slices/Counter/counterSlice'
import { pokemonSlice } from './Slices/pokemon/pokemonSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons:pokemonSlice.reducer,

[todosApi.reducerPath]: todosApi.reducer
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(todosApi.middleware)
})