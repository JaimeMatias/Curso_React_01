import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../../auth/autContext';
const LoginScren = () => {
const navigate=useNavigate();
const {user,dispatch}=useContext(AuthContext)
  const handleLogin = () => {
     // navigate('/',{
    //   replace:true
    // });

    const action ={
      type:'[auth] Login',
      payload:{name:'Matias'}
    }
    dispatch(action)
    navigate('/',{
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
