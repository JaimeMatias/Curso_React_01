import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemon = (page = 0) => {

    return (dispatch, getState) => {
        console.log('Ingresa')
        dispatch(startLoadingPokemons())

        //dispatch(setPokemons());
    }
}