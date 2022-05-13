import React from "react";
import { shallow } from 'enzyme';
import { HookApp } from "../HookApp";

describe('Prueba <HookApp />', () => {
    //Generar el Snapshot
    
    test('debe mostrar el Componente correctamente ', () => {
        const wrapper = shallow(<HookApp />);
        //Compara el componente generado con el snapshot que tenemos
        expect(wrapper).toMatchSnapshot();
    });

})
