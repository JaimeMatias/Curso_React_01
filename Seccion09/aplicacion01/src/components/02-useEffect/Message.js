import React, { useEffect } from 'react'

const Message = () => {
useEffect(()=>{
    console.log('Componente montado');
    return ()=>{
        console.log('Componente Desmontado')
    }
},[]  )

  return (
    <div>
      <h3>Eres Genial</h3>
    </div>
  )
}

export default Message
