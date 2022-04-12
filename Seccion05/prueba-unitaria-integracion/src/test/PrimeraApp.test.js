import { render } from "@testing-library/react"
import {shallow} from 'enzyme';
import '@testing-library/jest-dom'

import PrimeraApp from "../PrimeraApp";

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
    
    
})