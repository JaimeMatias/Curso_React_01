import '@testing-library/jest-dom'
import { getHeroeByIdAsync } from '../../base-pruebas/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con Promesas', () => {
    test('getHeroeByIdAsync debe de retornar un Heroe async ', (done) => {
        const id = 1;
        //La función getHeroeByIdAsync devuelve una promesa
        getHeroeByIdAsync(id).then(heroe => {

            expect(heroe).toBe(heroes[0])
            done()
        })
    });


    test('debe de obtener un error si el heroe por id no existe', (done) => {
        const id = 10;
        //La función getHeroeByIdAsync devuelve una promesa
        getHeroeByIdAsync(id).catch(error=>{
            expect(error).toBe('No se pudo encontrar el héroe');
            done()
        })
    });

})