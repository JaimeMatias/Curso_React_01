import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helper/getHeroesByPublisher'
import HeroCard from './heroCard'

const HeroList = ({ publisher }) => {

    const heroes = useMemo(()=> getHeroesByPublisher(publisher),[publisher])//Se va a voler a llamar a getHeroesByPublisher cuando el publisher cambio, no antes

    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeInDown'>
           
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id} hero={hero}/>
                ))
            }
        </div>
    )
}

export default HeroList
