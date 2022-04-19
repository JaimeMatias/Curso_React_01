import React from "react";
import { shallow } from 'enzyme';

import { GifGridItem } from '../../components/GifGridItem'

describe('Pruebas en <GifGridItem />', () => {
    const title = 'Un titulo';
    const url = 'https://localhost/algo,jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />)
    test('debe mostrar el Componente correctamente ', () => {

        expect(wrapper).toMatchSnapshot();
    })

    test('debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('debe de tener la imagen igual al url y alt de los props',()=>{
        const img =wrapper.find('img');
        console.log(img.props()) //Metodo que nos devuelve los valores que se les pasa en las properties a un elemento
    })
    test('debe de tener  animate_fadeIn',()=>{
        const div = wrapper.find('div');
         console.log(div.html().includes("animate__fadeIn")) //Uso el HTML para encontrar el string que busco
         expect(div.html().includes("animate__fadeIn")).toBe(true)
    })
})