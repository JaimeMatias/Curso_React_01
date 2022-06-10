import React, { Children, useContext } from 'react'
import { Navigate } from 'react-router';
import { AuthContext } from '../auth/autContext'

const PublicRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const { logged } = user
    
if (!logged) {
    return children
}
    
       
}

export default PublicRoute
