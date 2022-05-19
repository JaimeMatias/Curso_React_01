import { heroes } from "../../data/heroes";

export const GetHeroesByID =(id)=>{

    return heroes.find(hero=>hero.id===id)
}