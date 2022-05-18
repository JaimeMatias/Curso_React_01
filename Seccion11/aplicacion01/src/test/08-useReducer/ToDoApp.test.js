import React from 'react';
import { mount, shallow } from "enzyme"
import { demoTodos } from '../fixtures/demoTodos';
import { act } from '@testing-library/react-hooks';
import TodoApp from '../../components/08-useReducer/TodoApp';

describe('Pruebas en <TodoApp />>', () => {
    const wrapper= shallow(<TodoApp/>)

    Storage.prototype.setItem =jest.fn(()=>{})
  test('Debe de mostrarse correctamente ', () => {
    expect(wrapper).toMatchSnapshot()
  });
  
  test('Debe de agregar un TODO', () => {
    const wrapper = mount(<TodoApp />);
    
    act(()=>{
        wrapper.find('ToDoAdd').prop('handleAddTodo')(demoTodos[0])    
        wrapper.find('ToDoAdd').prop('handleAddTodo')(demoTodos[1])
    })
    expect(wrapper.find('h1').text().trim()).toBe('TodoApp: 2');
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  })
  
  test('debe de eliminar un todo ', () => {
    wrapper.find('ToDoAdd').prop('handleAddTodo')(demoTodos[0])
    wrapper.find('ToDoList').prop('handleDelete')(demoTodos[0].id)
    expect(wrapper.find('h1').text().trim()).toBe('TodoApp: 0');


  })
  
})
