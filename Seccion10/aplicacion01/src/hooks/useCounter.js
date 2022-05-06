import { useState } from "react"

export const useCounter = (initialState=10) => {
  const[state,setState]=useState(initialState);

  const increment =()=>{
      setState(state+1);
  };

  const decrement =()=>{
    setState(state-1);
}
const reset=()=>{
    setState(initialState);
}
    return {state,increment,decrement,reset}
    //el Return devuelve 4 objetos
    //State es el hook
    //increment, es una referencia a la función que aumenta el valor del Hook y en donde se importe se la llama simplemente con ese nombre 'increment'
    //decrement, es una referencia a la función que decrementa el valor del Hook y en donde se importe se la llama simplemente con ese nombre 'decrement'
    //reset, es una referencia a la función que reinicia el valor del Hook y en donde se importe se la llama simplemente con ese nombre 'reset'
}



