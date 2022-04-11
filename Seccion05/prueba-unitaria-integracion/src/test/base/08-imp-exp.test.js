import '@testing-library/jest-dom'
import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp';
import heroes from '../../data/heroes';


describe('Prueba en funciones de Heroes', () => {

    test('debe retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        console.log(heroe)
        const heroeDate = heroes.find(h => h.id === id);
        expect(heroe).toEqual(heroeDate)
    })

    test('debe retornar un undefined si Heroe no existe', () => {
        const id = 1222;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined)
    })


test('Debe de retornar un arreglo con los héroes de DC ', () => {
  const DC=getHeroesByOwner('DC')
    const heroeDC= heroes.filter(h=>h.owner=='DC')

    expect(DC).toEqual(heroeDC)
})

test('Debe de retornar un arreglo con los héroes de Marvel ', () => {
    const DC=getHeroesByOwner('Marvel')
      const heroeDC= heroes.filter(h=>h.owner=='Marvel')
     
      expect(DC.length).toEqual(heroeDC.length)
  })

})