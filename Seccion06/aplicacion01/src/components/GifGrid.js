import React, { useState, useEffect } from 'react'

const GifGrid = ({ category }) => {
    const [contador, setContador] = useState(contador)
    useEffect( //useEffect sirve para definir secciones de codigo a ejecutar condicionalmente
        () => {
            getGifs()
        }, [])//Indicar que solo se ejecute el componente cuando se renderiza por primera vez


    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=burrito&limit=5&api_key=X6hBm4AYW7Fhw9EK9kKTcrH5CAT6ENDP&rating=g';
        const resp = await fetch(url);
        const { data } = await resp.json()
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs)
    }
    return (
        <div>

            <h3>{category}</h3>

        </div>
    )
}

export default GifGrid
