import { heroes } from "../../data/heroes";

export const GetHeroesByName = (superhero) => {
    if(superhero.length===0){
        return [];
    }
    console.log('Cargando Imagen')
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(superhero.toLowerCase()))
    //return heroes;
}