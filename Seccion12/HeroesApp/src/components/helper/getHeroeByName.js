import { heroes } from "../../data/heroes";

export const GetHeroesByName = (superhero) => {
    console.log('Cargando Imagen')
    return heroes.find(hero => hero.superhero === superhero)
}