import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ edad }) => {  
    //Como yo no puedo modificar lass variables, lo que se usa para ir actualizando el estado de las cosas son los Hooks
    //Definición del Hook nombre
    const [counter, setCounter] = useState(edad);

    return <>
        <h1>
            CounterApp Boddy
        </h1>
        <h2>Edad: {counter}</h2>
        <button id='ButtonIncrementar' onClick={()=>{setCounter(counter+1)}} >+1</button>
        <button id='ButtonDecrementar'onClick={()=>{setCounter(counter-1)}}>-1</button>
    </>

};


CounterApp.propTypes = {
    edad: PropTypes.number
};

CounterApp.defaultProps = {
    edad: 18
}

export default CounterApp;