import React from 'react'
import { useFech } from '../../hooks/useFetch'

const MultipleCustomHooks = () => {
    const url='https://www.breakingbadapi.com/api/quotes/1' //
    
    const state=useFech(url)
console.log(state)
  return (
    <div>
      <h1>Custom Hooks!!!</h1>
    </div>
  )
}

export default MultipleCustomHooks
