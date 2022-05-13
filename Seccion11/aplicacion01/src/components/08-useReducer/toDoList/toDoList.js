import React from 'react'
import { ToDoListItem } from '../toDoListItem/toDoListItem'

export const ToDoList = ({ input, handleDelete, handleToggle }) => {
    // si uso {} todo lo que defina en el centro, va a ser considerado como elementos de un objeto
    //Si yo defino valores afuera de los corchetes, van a ser considerado como valores de entrada (no pueden ser funciones)
    return (
        <div className='col-7'>
            TODOS
            {/*TodoListItem,Todo,index,handleDelete,handleToggle*/}
            <ul className='list-group list-group.flush'>
                {
                    input.map((element, i) => {
                        //TodoListItem, todo,index, handleDelete,handelToggle
                        return (

                            <ToDoListItem key={element.id}element={element} contador={i} handleDelete={handleDelete} handleToggle={handleToggle} />



                        )
                    })
                }
            </ul>
        </div>
    )
}

