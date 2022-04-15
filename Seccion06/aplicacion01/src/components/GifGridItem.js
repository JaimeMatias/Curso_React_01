import React from 'react'

const GifGridItem = (img) => {
    const {id,title,url}=img.img
    
    
  return (
    <div className="card animate__bounceIn">
        <img src={url} alt={title}/>
    <p>{title}</p>  
    </div>
  )
}

export default GifGridItem
