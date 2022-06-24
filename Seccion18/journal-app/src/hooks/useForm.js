import { useEffect, useState } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {

    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setFormValidation] = useState({})
    useEffect(() => {

        createValidators();
        console.log(formValidation)
    }, [formState])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }
    const createValidators = () => {
        const formCheckedValues = {};
        console.log(Object.keys(formValidations))
        for (const formField of Object.keys(formValidations)) {

            const [fn, errorMessage] = formValidations[formField]; // Extrae los valores de cada elemento, pero les pone un nombre tambien, lo llama fn y errorMessage
            console.log(`${formState[formField]} ${fn(formState[formField])}`)
            formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage
        }
        setFormValidation(formCheckedValues)
     
    }
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
    }
}