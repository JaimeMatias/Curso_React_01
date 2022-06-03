import React, { useState } from 'react'
import { GetHeroesByName } from '../helper/getHeroeByName'
import HeroCard from '../heroes/heroCard';
import useForm from '../hooks/useForm'

export const SearchScreen = () => {
  const [controlador, setControlador] = useState(0);
  const [heroe,setHeroe]=useState('');
  const [{ searchText }, handleInputChange, reset] = useForm({
    searchText: ''
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`Valor del Controlador: ${controlador}`)
    console.log('Submit Realizado: ', searchText)
    const Heroe = GetHeroesByName(searchText)
    console.log(!Heroe)
    if(!Heroe){
      reset()
      setControlador(+1)
      return
    }
    reset()
    setControlador(+2)
    setHeroe(Heroe)

  }
  const handleSearch = () => {
    console.log()
  }
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

          {
            (controlador == 2) &&
            <p className='text-muted'>Mostrando Heroe {JSON.stringify(heroe)}</p>&&
            <HeroCard key={heroe.id} hero={heroe}/>

          }
                    {
            (controlador == 1) &&
            <p className='text-muted'>Heroe No Encontrado</p>

          }


        </div>

      </div>
    </>
  )
}

