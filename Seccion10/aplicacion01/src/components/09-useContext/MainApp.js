import React, { useState } from 'react'
import { AboutScreen } from './AboutScreen'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'


export const MainApp = () => {
const [user,setuser]=useState({})
  
  return (
    <div>
      <UserContext.Provider value={{user,setuser}}>

        <AppRouter />
      </UserContext.Provider>


    </div>
  )
}

