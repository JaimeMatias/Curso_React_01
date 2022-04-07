

const getImagen =async()=>{
    const apiKey=''
    const peticion =await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=burrito&rating=g&limit=5`)
    const {data} = await peticion.json();
    
    
    const {url}=data.images.original;
    //Creo una etiqueta img y la meto en el body
    //Así añado un gif a la pagina web que creé
    const img=document.createElement('img');
    img.src=url;
    document.body.append(img);
    
    
    }
    
    getImagen();
    