import '@testing-library/jest-dom'
import { getUser,getUsuarioActivo } from '../../base-pruebas/05-funciones';
 describe('Pruebas sobre 05-funciones',()=>{
     test('prueba getUsuario ', () => {
       const userTest={
        uid: 'ABC123',
        username: 'El_Papi1502'
       }
       const user= getUser();
    
       expect(user).toEqual(userTest);//ToEqual sirve para controlar las propiedades de los objetos
     });

     test('prueba getUsuarioActivo', () => {
         const nombre='matias'
        const userTest={
         uid: 'ABC567',
         username:nombre
        }
        const user=getUsuarioActivo(nombre)
     
        expect(user).toEqual(userTest);//ToEqual sirve para controlar las propiedades de los objetos
      })
     
 })