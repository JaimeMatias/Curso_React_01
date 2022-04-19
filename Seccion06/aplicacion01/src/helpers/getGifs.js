export const getGifs = async (category) => {
"Función que recibe una categoría y devuelve un arreglo con la información de los gifs"

    const url =  `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&api_key=X6hBm4AYW7Fhw9EK9kKTcrH5CAT6ENDP&rating=g`;
    const resp = await fetch(url);
    const { data } = await resp.json()
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return(gifs)
}