import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import JournalPage from '../pages/JournalPage'

export const JournalRoutes = () => {
  return (
    <div>JournalRouthes
      <Routes>
        <Route path='/' element={<JournalPage/>}/>
        <Route path='/*'  element={<Navigate to='/'/>}/>
      </Routes>
    </div>
  )
}


