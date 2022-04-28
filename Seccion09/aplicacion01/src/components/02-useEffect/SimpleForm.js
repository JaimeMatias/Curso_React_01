import React, { useEffect, useState } from 'react'
import './effects.css'
import Message from './Message'
const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
    })

    const { name, email } = formState

    useEffect(() => {
        console.log('hey')
    },
        [] //Ese corchete indica que en que evento queremos que la función se dispare, cuando está vació quiere decir que es con el login
    )
    useEffect(() => {
        console.log('formSate Cambio')
    },
        [formState] //En este caso estamos indicando que queremos que cambien cuando formState tiene un cambio
    )
    useEffect(() => {
        console.log('Email Cambio')
    },
        [email] //En este caso estamos indicando que queremos que cambien cuando formState tiene un cambio
    )
    const handleInputChange = (e) => { //e reprensenta el cambio de estado en el input
        console.log(e.target)
        console.log(e.target.name)
        console.log(e.target.value)
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })

    }
    return (
        <>
            <h1>UseEffec</h1>
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
            </div>
{(name==='123') && <Message/>}
        </>
    )
}

export default SimpleForm
