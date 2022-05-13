import React, { useReducer, useEffect } from 'react'
import useForm from '../../hooks/useForm'
import './styles.css'
import { todoReducer } from './todoReducer'
import { ToDoList } from './toDoList/toDoList'
import { ToDoAdd } from './toDoAdd/toDoAdd'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}


const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init)


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const handleDelete = (todoID) => {
        console.log(todoID)
        const action = {
            type: 'delete',
            payload: todoID
        };
        dispatch(action);
    }

    const handleToggle = (todoId) => {
        console.log(todoId)
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    const handleAddTodo = (newTodo) => {

        dispatch({
            type: 'add',
            payload: newTodo
        })

    }

    const handleSubmit = (e) => {



    }

    return (
        <div>
            <h1>TodoApp: {todos.length}</h1>
            <hr />

            <div className='row'>
                <ToDoList input={todos} handleDelete={handleDelete} handleToggle={handleToggle} />

                <div className='col-5'>
                    <ToDoAdd handleAddTodo={handleAddTodo} />
                </div>

            </div>







        </div>
    )
}

export default TodoApp
