import React from 'react'
import { useFech } from '../../hooks/useFetch'
import { useCounter } from "../../hooks/useCounter";




let vaible=0
const MultipleCustomHooks = () => {
  //Un componente puede recargase varias veces sin que el usuario realice ninguna modificación, este componente se ejecuta 3 veces
  const defaulte = 1;
  
  const { state, increment, decrement, reset } = useCounter(defaulte)
  const url = `https://www.breakingbadapi.com/api/quotes/${state}`

  const { loading, data } = useFech(url)
  vaible++

  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {
        loading
          ? (
            <div className='alert alert-info text-certer'>
              Loading...
            </div>
          )
          : (
            <blockquote className='blockquote text-right'>
              <p className='mb-0' >{author}</p>
              <footer className='blockquote-foot'>{quote}</footer>
            </blockquote>

          )
      }
      <button onClick={decrement} className="btn">anterior</button>
      <button onClick={reset} className="btn">reiniciar</button>
      <button onClick={increment} className="btn">siguiente</button>



    </div>
  )
}

export default MultipleCustomHooks
