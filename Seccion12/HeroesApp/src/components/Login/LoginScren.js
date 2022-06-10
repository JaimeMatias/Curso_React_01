import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../../auth/autContext';
import { types } from '../../types/types';
const LoginScren = () => {
const navigate=useNavigate();
const {user,dispatch}=useContext(AuthContext)
  const handleLogin = () => {
     // navigate('/',{
    //   replace:true
    // });

    const action ={
      type:types.login,
      payload:{name:'Matias'}
    }
    dispatch(action)
    const lugar=localStorage.getItem('lastPast')
    console.log(`El lugar al cual va a ir es:${lugar}`)
    navigate(lugar,{
      replace:true
    })
  }

  return (
    <div className='container mt-5'>
      <h1>Login Screen</h1>
      <hr />
      <button className='btn btn-primary'
        onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}

export default LoginScren
