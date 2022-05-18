import React from 'react';
import { shallow } from "enzyme"
import { demoTodos } from '../fixtures/demoTodos';
import { ToDoList } from '../../components/08-useReducer/toDoList/toDoList';

describe('Pruebas en <TodoList />>', () => {
    const handleToggle=jest.fn();
    const handleDelete=jest.fn();

    const wrapper = shallow(<ToDoList 
        input ={demoTodos}
        handleDelete={handleDelete}
         handleToggle={handleToggle}
      />)

test('debe de mostrarse corectamente ', () => {

    expect(wrapper).toMatchSnapshot()

})

test('debe de tener dos  <TodoListItem> ', () => {

expect(wrapper.find('ToDoListItem').length).toBe(demoTodos.length);
expect(wrapper.find('ToDoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function))
})


})
