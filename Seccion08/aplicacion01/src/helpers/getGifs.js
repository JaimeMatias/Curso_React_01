
import PropTypes from 'prop-types';

export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=X6hBm4AYW7Fhw9EK9kKTcrH5CAT6ENDP&rating=g`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}

//Sirve para definir las propiedades del componente eL Tipo del valor y si es requerido o no
getGifs.propTypes = {
    category: PropTypes.string.isRequired,
}