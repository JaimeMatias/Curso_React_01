import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import GifGrid from './GifGrid';
//import PropTypes from 'prop-types';


export const GifExpertApp = (initialData) => {
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(initialData.initialData);


    return (
        <>
            <h2>GifExpertApp</h2>
           
            {// Para que exista la comunicación este componentes de distintos niveles, no lo que se puede hacer es crear en el componente hijo
                // un atribuco cuyo valor sea una referencia a la función de Hook del padre
                //En este caso con la función SetCategories. Así cada que en AddCategory se realiza un cambio, esto llega al GifExpertAdd
            }
            <AddCategory setCategories={setCategories} />
            
            <ol>
                {
                    // La función map, me permite iterar sobre los elementos de un arreglo cuando estoy en una pagina web
                    categories.map(category => 
                        <GifGrid 
                        key={category}
                        category={category}
                        />
                    )
                }
            </ol>

        </>
    )
}

//Sirve para definir los valores por defecto de las distintas propiedades del componente
GifExpertApp.defaultProps = {
    initialData: ['One Punch']
}


export default GifExpertApp;