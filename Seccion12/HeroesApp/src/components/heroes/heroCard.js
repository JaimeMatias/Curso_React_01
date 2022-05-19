import React from 'react'
import {Link} from 'react-router-dom'
const HeroCard = ({ hero }) => {
    const { id, superhero,alter_ego,characters,first_appearance } = hero
    return (
        <div className='cols'>
            <div className='card'>

                <div className='row no-gutters'>
                    <div className='col-4'>
                        <img src={`/assets/${id}.jpg`} className='card-img' alt={superhero} />
                    </div>
                    <div className='col-8'>
                        <div className='card-body'>
                            <h5 className='card-title'>{superhero}</h5>
                            <p className='card-text'>{alter_ego}</p>

                            {
                                (alter_ego !==characters)&&
                                <p className='text-muted'>{characters}</p>

                            }
                            <p className='card-text'>

                                <small className='text-muted'>{first_appearance}</small>
                            </p>
                            <Link to={`/hero/${id}`}>Mas..</Link>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>

    )
}

export default HeroCard