import { renderHook,act } from '@testing-library/react-hooks';
import { useCounter } from "../../hooks/useCounter";


describe('Pruebas en useCounter', () => {
    test('debe de retornar valores por defecto ', () => {

        const { result } = renderHook(() => useCounter());
        console.log(result.current)
        expect(result.current.state).toBe(10)
        expect(typeof result.current.increment).toBe('function')
        expect(typeof result.current.decrement).toBe('function')
        expect(typeof result.current.reset).toBe('function')
    })
 
    test('debe de tener el counte en 100', () => {
        const { result } = renderHook(() => useCounter(100));
        expect(result.current.state).toBe(100)
    })


    test('Debe de incrementar el counter en 1', () => {
      const {result}=renderHook(()=>useCounter(100));
      const {increment}=result.current;
      //El metodo ACT nos permite ejecutar las funciones de los hooks en este caso, el incrementar
      act(()=>{
          increment()
      });
      const {state}=result.current;
      expect(state).toBe(101)
    })

    test('Debe de Decrementar el counter en 1', () => {
        const {result}=renderHook(()=>useCounter(100));
        const {decrement}=result.current;
        //El metodo ACT nos permite ejecutar las funciones de los hooks en este caso, el decrement
        act(()=>{
            decrement()
        });
        const {state}=result.current;
        expect(state).toBe(99)
      })
    
      test('Debe de Reniciar el valor', () => {
        const {result}=renderHook(()=>useCounter(100));
        const {increment,reset}=result.current;
        //El metodo ACT nos permite ejecutar las funciones de los hooks en este caso, el reset
        act(()=>{
            increment();
            reset()
        });
        const {state}=result.current;
        expect(state).toBe(100)
      })
})
