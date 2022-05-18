import React from 'react';
import { shallow } from "enzyme"
import { demoTodos } from '../fixtures/demoTodos';
import { ToDoListItem } from '../../components/08-useReducer/toDoListItem/toDoListItem';

describe('Pruebas en <TodoListItem', () => {
  const handleToggle=jest.fn();
  const handleDelete=jest.fn();
  const wrapper= shallow(<ToDoListItem element={demoTodos[0]} contador={0} handleDelete={handleDelete} handleToggle={handleToggle}/>)
    test('debe de mostrarse correctamente ', () => {
   
      expect(wrapper).toMatchSnapshot()
    })

    test('debe de llamar la función handleDelete',()=>{
      wrapper.find('button').simulate('click');
      expect(handleDelete).toHaveBeenCalledWith(1)
    })
    
    test('debe de llamar la función HabdleToggle',()=>{

      wrapper.find('p').simulate('click');
      expect(handleToggle).toHaveBeenCalledWith(1)
    })

    test('debe de mostrar el texto correctamente', () => {
      const p=wrapper.find('p');
      expect(p.text().trim()).toBe(`1: ${ demoTodos[0].desc } 1`)
    })

    test('debe de tener la clase complete si el TODO.done = true', () => {
      const todo=demoTodos[0];
      todo.done=true;
      const wrapper= shallow(<ToDoListItem element={todo}/>)

      expect(wrapper.find('p').hasClass('complete')).toBe(true)
   


    })
    
    
})
