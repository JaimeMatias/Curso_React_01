import React, { useState, useEffect } from 'react'
import GifGridItem from './GifGridItem'
import { useFetchGifs } from './hooks/useFetchGifs'

const GifGrid = ({ category }) => {
    console.log('Enviado a UseFetcGif',category)
    const { data:images, loading } = useFetchGifs(category);


    return (
        <>
            <h3>{category}</h3>
            {loading && <p>loading</p>}

            <div className="card-grid">

                {
                    // La función map, me permite iterar sobre los elementos de un arreglo cuando estoy en una pagina web
                    images.map((img) =>

                        <GifGridItem img={img} key={img.id} />





                    )
                }

            </div>
        </>

    )
}

export default GifGrid
