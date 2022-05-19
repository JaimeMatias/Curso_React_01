import React from 'react'
import { useParams,Navigate } from 'react-router-dom'
import  {GetHeroesByID}  from '../helper/getHeroById'

export const HeroScreen = () => {
  const params=useParams()
  const {heroeid}=params
  const Heroe= GetHeroesByID(heroeid)
  if(!Heroe) return <Navigate to="/"/>
  return (
    <div>{Heroe.alter_ego}
     </div>
  )
}
