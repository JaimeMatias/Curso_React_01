import React, { useState } from 'react'

const useForm = (initialState={}) => {
  const [values, setValues]=useState(initialState)

    const reset =()=>{
      setValues(initialState);
    }
  const handleInputChange =(e)=>{
    //console.log(e.target)

    setValues({
        ...values,
        [e.target.name]: e.target.value
    })
  }

  return[values,handleInputChange,reset]
}

export default useForm
