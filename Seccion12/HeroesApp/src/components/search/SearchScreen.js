import React, { useMemo, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { GetHeroesByName } from '../helper/getHeroeByName';
import queryString from 'query-string';
import HeroCard from '../heroes/heroCard';
import useForm from '../hooks/useForm'

export const SearchScreen = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const lastPast=`/Search${location.search}`
  localStorage.setItem('lastPast',lastPast)
  const { q = '' } = queryString.parse(location.search)
   const [{ searchText }, handleInputChange, reset] = useForm({
    searchText: q
  })


 
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submit Realizado: ', searchText)
    navigate(`?q=${searchText}`)
  }
  const HeroeFileted =useMemo(()=>GetHeroesByName(q),[q])  //Se va a voler a llamar a GetHeroesByName cuando la query(q) cambio, no antes

 
  console.log(HeroeFileted)


  return (
    <>
      <h1>Busquedas</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder='Buscar un Héroe'
              className='form-control'
              name="searchText"
              autoComplete='off'
              value={searchText}//Defino el valor de la variable, como el valor del hook
              onChange={handleInputChange}//cuando cambia el valor de la variable, cambia tambien el hook
            />
            <button
              className='btn btn-outline-primary'
              type="submit"

            >
              Buscar
            </button>
          </form>

        </div>
        <div className='col-7'>
          <h4>Resultados</h4>
          <hr />
          {(q==='')
          ?<div className='alert alert-info'>Buscar un Heroe</div>
        :HeroeFileted.length==0 &&
        <div className='alert alert-danger'>No se encontro el Heroe</div>
        }
          {HeroeFileted.length!=0 &&HeroeFileted.map(hero => (
            <HeroCard key={hero.id}
              hero={hero} />
          ))
          
          }

          
        </div>

      </div>
    </>
  )
}

