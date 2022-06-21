import { pokemonApi } from "../../../api/pokemonsApi"
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemon = (page = 0) => {
    const limit = 10
    return async (dispatch, getState) => {

        console.log('Ingresa')
        dispatch(startLoadingPokemons())
        // const resp= await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${page * 10}`)
        // const data=await resp.json();
        const resp = await pokemonApi.get(`/pokemon?limit=${limit}&offset=${page * 10}`)
        // console.log(resp)
        //console.log(data.results )
        const pokemons= resp.data.results
        dispatch(setPokemons({page:page+1,pokemons}));
    }
}