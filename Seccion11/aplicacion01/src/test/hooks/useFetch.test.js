import { renderHook } from "@testing-library/react-hooks"
import { useFech } from "../../hooks/useFetch"

describe('Pruebas en useFect', () => {
    test('debe de retornar la informaciónr por defecto', () => {
        const { result } = renderHook(() => useFech(`https://www.breakingbadapi.com/api/quotes/1`));
        const { data, loading, error } = result.current;
        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
    });

    /*
    test('Debe de tener la info deseada ', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFech(`https://www.breakingbadapi.com/api/quotes/1`));
        await waitForNextUpdate();
        const { data, loading, error } = result.current;
        expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBe(null);
    })*/
/*
    test('Debe de manejar el error ', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFech(`https://reqres.in/apid/users?page=2`));
        await waitForNextUpdate();
        const { data, loading, error } = result.current;
        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('No se pudo cargar la info');
    })
*/

})
