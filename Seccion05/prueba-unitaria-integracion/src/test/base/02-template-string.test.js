import '@testing-library/jest-dom'

import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas en 02-template-string',()=>{
    test('getSaludo debe de retornar hola fernando', () => {
      const nombre='Matias';
      const saludo=getSaludo(nombre);
      expect(saludo).toBe('Hola Matias')
    })

    //getSaludo debe de retornar Hola Jaime si no hay argumento nombre

    test('getSaludo sin parametro de entrada',()=>{
        const saludo=getSaludo();
        expect(saludo).toBe('Hola Jaime');
    }

    )
    
})