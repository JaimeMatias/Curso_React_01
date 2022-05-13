import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import useForm from "../../hooks/useForm";


describe('Pruebas en useForm', () => {
    const initialForm = {
        name: 'matias',
        email: 'matias.raul@gmail.com'
    }

    test('debe de regresar un formulario por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [values, handleInputChange, reset] = result.current
        expect(values).toEqual(initialForm) //Comparamos que la información obtenida del hook es igual a la que mandamos en un principio

    })

    test('Debe de caambiar el valor del formulario (cambiar name)', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange, reset] = result.current
        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'melisa'
                }
            })
        })
        const [values] = result.current
        expect(values).toEqual({...initialForm,name:'melisa'})
    })

    test('debe de re-establecer el formulario con RESET', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange, reset] = result.current
        console.log('reset de los campos')

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'melisa'
                }
            })
            reset()
        })
        const [values] = result.current
        expect(values).toEqual(initialForm)
    })

})
