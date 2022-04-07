const apiKey='Reempazar por ApiKey'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=burrito&rating=g&limit=5`)
//Anidamiento de Promesas
peticion
.then(resp =>resp.json())
.then(({data})=>{

    const {url}=data.images.original;
    //Creo una etiqueta img y la meto en el body
    //Así añado un gif a la pagina web que creé
    const img=document.createElement('img');
    img.src=url;
    document.body.append(img);
})
