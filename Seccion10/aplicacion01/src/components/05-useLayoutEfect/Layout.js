import React, { useLayoutEffect,useRef } from 'react'
import { useFech } from '../../hooks/useFetch'
import { useCounter } from "../../hooks/useCounter";

import '../05-useLayoutEfect/Layout.css'



const Layout = () => {
    //Un componente puede recargase varias veces sin que el usuario realice ninguna modificación, este componente se ejecuta 3 veces
    const defaulte = 1;

    const { state, increment, decrement, reset } = useCounter(defaulte)
    const url = `https://www.breakingbadapi.com/api/quotes/${state}`

    const { loading, data } = useFech(url)
    const { author, quote } = !!data && data[0];

    const pTag =useRef();
    useLayoutEffect(()=>{
        console.log(pTag.current.getBoundingClientRect());
    },[quote])

    return (
        <div>
            <h1>useLayoutEfect</h1>
            <hr />

            <blockquote className='blockquote text-right'>
                <footer className='blockquote-foot' ref={pTag}>{quote}</footer>
            </blockquote>

            <button onClick={decrement} className="btn">anterior</button>
            <button onClick={reset} className="btn">reiniciar</button>
            <button onClick={increment} className="btn">siguiente</button>

        </div>
    )
}

export default Layout
