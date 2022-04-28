import React, { useEffect, useState } from 'react'
import useForm from '../../hooks/useForm'
import './effects.css'

import Message from './Message'
const FormWithCustomHook = () => {
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password:'',
    })

    const { name, email,password } = formValues

    useEffect(() => {
        console.log('email Cambió')
    },
        [email] //Ese corchete indica que en que evento queremos que la función se dispare, cuando está vació quiere decir que es con el login
    )
const handleSubmit =(e)=>{
e.preventDefault()
console.log(formValues)
}
    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
            <hr />
            <div className='form-group'>
                <input
                    type="text"
                    name="name"
                    className='form-control'
                    placeholder='Tu Nombre'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange} ></input>
                <div className='form-group'>
                    <input
                        type="text"
                        name="email"
                        className='form-control'
                        placeholder='Tu Email'
                        autoComplete='off'
                        value={email}
                        onChange={handleInputChange} ></input>
                </div>
                <div className='form-group'>
                    <input
                        type="password"
                        name="password"
                        className='form-control'
                        placeholder='Tu Contraseña'
                        value={password}
                        onChange={handleInputChange} ></input>
                </div>
            </div>
{(name==='123') && <Message/>}

<button type="submit" className='btn btn-primary'>
    Guardar
    </button>
        </form>
    )
}

export default FormWithCustomHook
