import React, { useMemo } from 'react'
import { useState } from "react"
import { useCounter } from '../../hooks/useCounter'
import { procesoPesado } from '../helper/procesoPesado';

const MemoHook = () => {
    const { state: counter, increment } = useCounter(1000);
    const [show, setShow] = useState(true)

   const memoProcesoPesado= useMemo(() => procesoPesado(counter), [counter]); //Indica que función se debe disparar cuando un Hook cambia, en este estado cuando el counter cambia
    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small> </h3>
            <hr />
            <p>{memoProcesoPesado}</p>
            <button onClick={() => increment()}>+1</button>
            <button className='btn btn-outline-primary ml-3'
                onClick={() => setShow(!show)}
            >Show/Hide {JSON.stringify(show)}</button>
        </div>
    )
}

export default MemoHook
