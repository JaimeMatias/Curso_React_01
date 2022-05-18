import React from 'react';
import { shallow } from "enzyme"
import { demoTodos } from '../fixtures/demoTodos';
import { renderHook,act } from '@testing-library/react-hooks';

import { ToDoAdd } from '../../components/08-useReducer/toDoAdd/toDoAdd';

describe('Pruebas en <TodoAdd/>', () => {
const handleAddTodo= jest.fn()
const wrapper = shallow(<ToDoAdd handleAddTodo={handleAddTodo}/>)
  test('debe de mostrarse corerctamente ', () => {

    expect(wrapper).toMatchSnapshot()
  })
  
test('No debe de llamar handleAddTodo', () => {

    const formSubmit =wrapper.find('form').prop('onSubmit');
    formSubmit({preventDefault(){}})
    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  
})

test('debe de llamar la función habdleAddTodo ', () => {
    const value='Aprender React';
    wrapper.find('input').simulate('change',{
        target:{
            value,
            name:'description'
        }
    })
    const formSubmit =wrapper.find('form').prop('onSubmit');
    formSubmit({preventDefault(){}})
    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddTodo).toHaveBeenCalledWith({
        id:expect.any(Number),
        desc:value,
        done:false,
    });

    expect(wrapper.find('input').prop('value')).toBe('')

})


})
