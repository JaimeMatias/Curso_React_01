import React from 'react';
import { useState, useEffect } from 'react'
import './counter.css'

export const CounterApp = () => {
    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20
    })

const {counter1,counter2}=state;

    return (
        <>
            <h1>Counter1 {counter1}</h1>
            <hr />
            <button className='btn btn-primary' onClick={() => {
                console.log(`El valor de Counter1: ${counter1} Counter2 ${counter2}`);
                setCounter({
                    ...state, //Extrae todos los valores del objeto
                    counter1:counter1+1,
                   
                });
                console.log(`El valor despues Counter1: ${counter1} Counter2 ${counter2}`);
            }}> +1</button>
            <h1>Counter2 {counter2}</h1>
            <hr />
            <button className='btn btn-primary' onClick={() => {
                console.log(`El valor de Counter1: ${counter1} Counter2 ${counter2}`);
                setCounter({
                    ...state,
                    counter2:counter2+1,
                });
                console.log(`El valor de Counter1: ${counter1} Counter2 ${counter2}`);

            }}> +1</button>
        </>
    )
}