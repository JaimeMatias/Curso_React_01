import React from 'react';
import { shallow } from "enzyme";
import { todoReducer } from '../../components/08-useReducer/todoReducer';
import { demoTodos } from '../fixtures/demoTodos';


describe('Pruebas en TodoReducer', () => {
test('debe de retornar el estadopor defecto ', () => {
    const state=todoReducer(demoTodos,{});
    expect(state).toEqual(demoTodos)
  
})

test('debe de agregar un ToDo ', () => {
    const newTodo={

        id: 3,
        desc: 'Aprender HTML5',
        done: false
    }
   const action ={
       type:'add',
       payload:newTodo
   }
    const state=todoReducer(demoTodos,action);
    expect(state.length).toEqual(3)
    expect(state).toEqual([...demoTodos,newTodo])
  
})

test('debe de borrar un TODO', () => {
    const action ={
        type:'delete',
        payload:2
    }
    const state=todoReducer(demoTodos,action);
    expect(state.length).toEqual(1)
})


test('debe de hacer el TOGGLE del TODO', () => {
    const action ={
        type:'toggle',
        payload:2
    }
    const state=todoReducer(demoTodos,action);
    console.log(state[1].done)
    expect(state[1].done).toEqual(true)
})


})
