import React from 'react'

export const ToDoListItem = ({element,contador,handleToggle, handleDelete }) => {
    return (

        <li 
            className="list-group-item">
            <p className={`${element.done && 'complete'}`}
                onClick={() => handleToggle(element.id)}
            >{contador + 1}: {element.desc} {element.id}</p>
            <button className='btn btn-danger'
                onClick={() => { handleDelete(element.id) }}>Borrar</button>
        </li>

    )
}


