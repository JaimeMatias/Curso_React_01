import React, { useContext } from 'react'

import { UserContext } from './UserContext'

export const LoginScreen = () => {
  const { user, setuser } = useContext(UserContext);
  console.log(user)
  const nombre = {
    nombre: "Matias",
    correo: "matias@gmial",
    id: 123
  }
  const handleClick = () => {
    setuser(nombre)
  }
  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <button className='btn btn-primary' onClick={handleClick}>LogIn</button>
    </div>
  )
}

