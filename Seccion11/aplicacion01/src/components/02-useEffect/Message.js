import React, { useEffect, useState } from 'react'

const Message = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 })
    const { x, y } = coords

    useEffect(() => {//Cuando el componente se crea se ejecutan estos comandos

        console.log('Componente montado');
        const mouseMove = (e) => {
            const coors = { x: e.x, y: e.y }
            setCoords(coors)


        }
        window.addEventListener('mousemove', mouseMove) //Si yo explicitamente no retiro este evento cuando elimino el componente, esto se continuara ejecutando infinitamente

        return () => {//Cuando el componente deja de existir se ejecutan estos comandos
            window.removeEventListener('mousemove', mouseMove)
            console.log('Componente Desmontado')
        }
    }, [])

    return (
        <div>
            <h3>Eres Genial</h3>
            <p>
                X:{x}
                
                Y:{y}
            </p>
        </div>
    )
}

export default Message
