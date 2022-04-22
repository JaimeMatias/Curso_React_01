import React from 'react'
import PropTypes from 'prop-types';
export const GifGridItem = ({ title, url }) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={ url } alt={ title } />
            <p> { title } </p>
        </div>
    )
}
//Sirve para definir las propiedades del componente eL Tipo del valor y si es requerido o no
GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url:PropTypes.string.isRequired,
}