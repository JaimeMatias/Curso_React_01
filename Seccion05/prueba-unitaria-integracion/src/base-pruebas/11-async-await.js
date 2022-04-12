

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async() => {

    try {

        const apiKey = 'X6hBm4AYW7Fhw9EK9kKTcrH5CAT6ENDP';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

return url;
    } catch (error) {
        // manejo del error
       return 'No existe';
    }
    
    
    
}

 getImagen();



