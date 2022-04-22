import React from "react";
import { shallow } from 'enzyme';
import { GifExpertApp } from "../GifExpertApp";

describe('Prueba <GifExpertAdd />', () => {
    //Generar el Snapshot
    
    test('debe mostrar el Componente correctamente ', () => {
        const wrapper = shallow(<GifExpertApp />);
        //Compara el componente generado con el snapshot que tenemos
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar una lista de categorias ', () => {
        
      const categories=['One Punch','Dragon Ball']
      const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('GifGrid').length).toBe(categories.length)
    })
    

})
