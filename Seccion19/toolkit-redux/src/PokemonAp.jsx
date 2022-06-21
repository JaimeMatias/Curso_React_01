import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemon } from './store/Slices/pokemon/thunks';


const PokemonAp = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemon())
  }, [])


  const { page, pokemons, isLoading } = useSelector((state) => state.pokemons)// Me devuelve el valor del estado del redux Counter

  return (
    <>
      <h1>Pokemon App</h1>
      <hr></hr>
      <span>Loading:{isLoading ? 'True' : 'False'}</span>
      {/* {pokemons.map((pokemon) => {
        <h1>{pokemon}</h1>
      })} */}
      {pokemons.map(element => (<><li key={element.name}>{element.name} {element.url}</li></>)

      )}
      <button 
      disabled={isLoading}
      onClick={() => dispatch(getPokemon(page))}>Siguiente Pagina</button>
    </>
  )
}

export default PokemonAp
