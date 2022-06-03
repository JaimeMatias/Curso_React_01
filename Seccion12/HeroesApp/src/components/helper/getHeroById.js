import { heroes } from "../../data/heroes";

export const GetHeroesByID = (id) => {
    console.log('Cargando Imagen')
    return heroes.find(hero => hero.id === id)
}