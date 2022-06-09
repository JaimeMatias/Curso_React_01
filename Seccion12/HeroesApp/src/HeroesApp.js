import React, { useReducer } from 'react'
import { AuthContext } from './auth/autContext'
import { authReducer } from './auth/authReducer'
import AppRouter from './routers/AppRouter'
const init =()=>{
    return JSON.parse(localStorage.getItem('user'))||{logged:false};
}
export const HeroesApp = () => {
    const[user,dispatch]=useReducer(authReducer,{},init) // El State del authReducer se asigna la user, y el valor de la action, es el parametro de entrada del Dispatch
    return (
        <>
        <AuthContext.Provider value ={{
            user,
            dispatch
        }}>
        <AppRouter />
        </AuthContext.Provider>
            
        </>
    )
}

