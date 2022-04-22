import React from "react";
import { shallow } from 'enzyme';
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs')
describe('Pruebas en <GifGrid />', () => {
    const category = 'Perros'



    test('debe mostrar el Componente correctamente ', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        //1. Generar el Snapshot
        const wrapper = shallow(<GifGrid category={category} />);

        //Compara el componente generado con el snapshot que tenemos
        expect(wrapper).toMatchSnapshot();
    })


    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        const gifs =[{
            id:'ABC',

            url:'https://localhost',
            title:'Cualquier cosa'
        }]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        //1. Generar el Snapshot
        
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)

       
    })

})
