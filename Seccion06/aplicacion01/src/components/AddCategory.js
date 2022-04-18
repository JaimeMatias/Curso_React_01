import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        //Función que actualiza el estado de InputValue
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        //Función que se dispara cuando se envía el formulario
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cats => {
                if (cats.includes(inputValue)) {
                    return ([...cats])

                } else {
                    return ([inputValue,...cats ])
                }


            }) //Usa el metodo de Callback, utilizando una variable cat, la cual tiene los datos de las categorias
            //Esto se debe a que las funciones de Hooks conservan el estado anterior
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>

            <hr></hr>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}