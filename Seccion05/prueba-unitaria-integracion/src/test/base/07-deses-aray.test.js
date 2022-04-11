import '@testing-library/jest-dom'
import { retornaArreglo } from '../../base-pruebas/07-deses-arr';

 describe('Pruebas en desestructuracion',()=>{
     test('debe de retornar un string y un número ', () => {
      const [letras,numeros]=retornaArreglo();
      expect(letras).toBe('ABC');
      expect(typeof letras).toBe('string');//Controla el tipo del dato

      expect(numeros).toBe(123);
      expect(typeof numeros).toBe('number');//Controla el tipo del dato
     });

     
     
 })