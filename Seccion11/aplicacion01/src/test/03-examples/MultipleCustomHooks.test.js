import React from 'react';
import { shallow } from 'enzyme';
import MultipleCustomHooks from '../../components/03-examples/MultipleCustomHooks';
import { useFech } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
jest.mock('../../hooks/useFetch') //Genera un mock del useFetch
jest.mock('../../hooks/useCounter') //Genera un mock del useCounter


describe('Pruebas en <MultipleCustomHooks />', () => {
    useCounter.mockReturnValue({
        state: 10,
        increment: () => { }
    })

    test('debe de mostrarse correctamente ', () => {
        useFech.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })
        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar la información', () => {

        useFech.mockReturnValue({
            data: [{
                author: 'Fernando',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper.find('.alert').exists()).toBe(false)
        expect(wrapper.find('footer').text().trim()).toBe('Hola Mundo')
        expect(wrapper.find('.mb-0').text().trim()).toBe('Fernando')
    })


})
