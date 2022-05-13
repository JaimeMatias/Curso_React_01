import React, { memo } from 'react'


console.log('hola Mundo')
const initialState = [{
    id: 1,
    todo: 'Comprar Pan',
    done: false
}];

const todoReducer = (state = initialState, action) => {
    if (action?.type === 'agregar') {
        return [...state, action.payload];//Devuelve el contenido del stado inicial sumado con el payload
    }
    return state; //Los Reducer siempre deben devolver un state actualizado
}


const newTodo = {
    id: 2,
    todo: 'Comprar Gaseosa',
    done: false
}

const action = {
    type: 'agregar',//Le indica al redux que hacer
    payload: newTodo
}
let todos = todoReducer(initialState, action);

console.log(todos)



export const Reducer = (() => {


    return (
        <div>
            {
                todos.map(tarea => (
                    <ul key={tarea.id}>
                        <h1 >{tarea.id}</h1>
                        <h2 >{tarea.todo}</h2>
                        <h3 >{JSON.stringify(tarea.done)}</h3>
                    </ul>



                ))
            }
            < h1 > {JSON.stringify(todos.type)}</h1 >
        </div>


    )
})
