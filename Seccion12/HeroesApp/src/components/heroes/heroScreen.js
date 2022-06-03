import React, { useMemo, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { GetHeroesByID } from '../helper/getHeroById'
import { useNavigate } from 'react-router-dom'


export const HeroScreen = () => {
  const params = useParams()
  const navigate = useNavigate();
  const { heroeid } = params
  const Heroe = useMemo(() => GetHeroesByID(heroeid), [heroeid]) //Se va a voler a llamar a GetHeroesByID cuando el HeroeID cambio, no antes
  const handleReturn = () => {
    // if (Heroe.publisher=="Marvel Comics") {
    //   navigate('/marvel');
    //   return
    // }
    // navigate('/dc')
    navigate(-1)//Vuelve a la pestaña en que estaba
    
  }
  if (!Heroe) return <Navigate to="/" />
  const imagePath = `/assets/${Heroe.id}.jpg`
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={imagePath}
        className="animate__animated animate__fadeInDown"
          alt={Heroe.superhero} />
      </div>
      <div className='col+8'>
        <h3>{Heroe.superhero}</h3>
        <ul className='list-group list-group.flush'>
          <li className='list-group-item'><b>Alter ego: </b>{Heroe.alter_ego}</li>
          <li className='list-group-item'><b>Publisher: </b>{Heroe.publisher}</li>
          <li className='list-group-item'><b>First_Appearance: </b>{Heroe.first_appearance}</li>
        </ul>
        <h5>Characters</h5>
        <p>{Heroe.characters}</p>

        <button className='btn btn-primary'
          onClick={handleReturn}>

          Regresar
        </button>
      </div>
    </div>
  )
}
