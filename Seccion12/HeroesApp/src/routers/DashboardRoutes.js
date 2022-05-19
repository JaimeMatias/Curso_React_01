import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Navbar } from '../components/ui/Navbar'
import MarvelScreen from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { DcScreen } from '../components/dc/DcScreen'
import {  HeroScreen } from '../components/heroes/heroScreen'

//Sirve para renderizar una pagina cuando el path cambia
export const DashboardRoutes = () => {
  return (
    <>
      <Navbar/>
      <div className='container'>
      <Routes>
              
              <Route path="DC" element={<DcScreen />} />
              <Route path="Marvel" element={<MarvelScreen />} />
              <Route path="Search" element={<SearchScreen />} />
              <Route path="Hero/:heroeid" element={<HeroScreen />} />
              <Route path="/" element={<MarvelScreen />} />
          </Routes>
      </div>
      
    </>
  )
}