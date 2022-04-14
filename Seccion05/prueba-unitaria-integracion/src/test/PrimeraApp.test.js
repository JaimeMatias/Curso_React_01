import { render } from "@testing-library/react"
import {shallow} from 'enzyme';
import '@testing-library/jest-dom'

import PrimeraApp from "../PrimeraApp";
import { text } from "express";

describe('Pruebas en <PrimerApp />',()=>{

    //Para que funcione es necesario sacar el comentario en SetupTests
    test('debe mostrar el mensaje "Matias" ', () => {
      const saludo='"Matias"';
      const {getByText}=render(<PrimeraApp />)

      //wqexpect(getByText(saludo)).toBeInTheDocument()

    })

    test('Debe de mostrar <PrimerApp /> correctamente', () => {
      const wrapper =shallow( <PrimeraApp />);

      expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe de mostrar el subtitulo enviado por props', () => {
      const edad=14;
      const wrapper =shallow( <PrimeraApp edad={edad} />);
      const textoParrafo =wrapper.find('p').text();
      console.log(textoParrafo);
      expect(textoParrafo).toBe("14");
    })
    
    
})