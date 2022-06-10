import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../auth/autContext'


const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation()
    console.log(`El valor del user: ${user.logged}`)
    if (user.logged) {
        localStorage.setItem('lastPast', location.pathname)
    }


    return user.logged
        ? children
        : <Navigate to='/login' />

}

export default PrivateRoute
