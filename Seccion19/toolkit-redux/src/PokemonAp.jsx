import React from 'react'
import { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { getPokemon } from './store/Slices/pokemon/thunks';
const PokemonAp = () => {
const dispatch=useDispatch();
useEffect(  ()=>{
  dispatch(getPokemon())
},[])

  return (
    <>
      <h1>Pokemon App</h1>
    </>
  )
}

export default PokemonAp
