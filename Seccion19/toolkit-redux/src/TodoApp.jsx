import React, { useState } from 'react'
import { useGetTodoQuery, useGetTodosQuery } from './store/apis/todosApi'

const TodoApp = () => {
    // const { data: todos, isLoading } = useGetTodosQuery();
    const[todoID,settodoID]=useState(1)
    const {data:todo,isLoading}= useGetTodoQuery(todoID)

    return (
        <div>
            <h1>Todos /RTK Query</h1>
            <hr />
            <h4>is Loading:{isLoading ? 'True' : 'False'}</h4>
            <pre>{JSON.stringify(todo)}</pre>
             
         {/* <ul>{todos.map(element=>( <li key={element.id}><strong>{element.completed ? 'DONE ':'Pending '}</strong>{element.title}</li>))}
       </ul>   */}
             {/* <ul>
                {todos.map(element => (
                    <li key={element.id}>
                        {element.title}
                    </li>
                ))}
            </ul>  */}
            <button on onClick={()=>{settodoID(todoID-1)}}>
                Previous Todo
            </button>
            <button on onClick={()=>{settodoID(todoID+1)}}>
                Next Todo
            </button>
        </div>
    )
}

export default TodoApp
