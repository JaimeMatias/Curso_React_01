import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import LoginScreen from '../components/auth/LoginScreen'
import RegisterScreen from '../components/auth/RegisterScreen'

const AuthRouther = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/auth/login" element={<LoginScreen />}>
        </Route>
        <Route path="/auth/register" element={<RegisterScreen />}>
        </Route>
        <Route path="*" element={<LoginScreen />}></Route>

    </Routes>


</BrowserRouter>
  )
}

export default AuthRouther
