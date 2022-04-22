import React from "react"
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('<Pruebas en <AddCategory />', () => {
    const setCategories = jest.fn();
    let wrapper = undefined
    beforeEach(() => {
        jest.clearAllMocks() //Sirve para limpiar el componente en cada prueba
        wrapper = shallow(<AddCategory setCategories={setCategories} />)
    })


    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de cambiar la caja de Texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo'
        input.simulate('change', { target: { value } });
        expect(wrapper.find('p').text().trim()).toBe(value)
    })

    test('NO debe de postear la informacion con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault() { } })
        expect(setCategories).not.toHaveBeenCalled()
    })

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        console.log('------------------------------------------------------')
        //1. Simular el InputChange
        const input = wrapper.find('input');
        const value = 'Mundo Hola'
        input.simulate('change', { target: { value } });
        //2. Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault() { } })
        //3.setCategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled()
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function))
        //4. el valor del input debe de estar ''
        expect(wrapper.find('input').prop('value')).toBe('')
    })

})
