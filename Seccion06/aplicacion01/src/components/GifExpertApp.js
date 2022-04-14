import React, { useState } from 'react'
//import PropTypes from 'prop-types';


export const GifExpertApp = (initialData) => {
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(initialData.initialData);
    const handleAdd = () => {
        const CategoryAdd = 'Dato1';
        setCategories([...categories,CategoryAdd]);
    }


    
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr></hr>
            <button onClick={handleAdd}>Agregar</button>
            <ol>
                {
                    // La función map, me permite iterar sobre los elementos de un arreglo cuando estoy en una pagina web
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>

        </>
    )
}

//Sirve para definir los valores por defecto de las distintas propiedades del componente
GifExpertApp.defaultProps = {
    initialData: ['One Punch', 'Samurai X', 'Dragon Ball']
}


export default GifExpertApp;