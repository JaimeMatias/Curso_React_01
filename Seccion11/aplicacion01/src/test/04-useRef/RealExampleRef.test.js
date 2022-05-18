import React from 'react';
import { shallow } from "enzyme";
import RealExampleRef from "../../components/04-useRef/RealExampleRef";

describe('Pruebas sobre el componente <RealExampleRef/>', () => {
    const wrapper = shallow(<RealExampleRef />);

    test('Debe mostrarse correctamente ', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false)
    })

    test('Debe de morar el componente <MultipleCustomHooks', () => {
        wrapper.find('button').simulate('click'); //Nos permite simular un click
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true)

    })

})
