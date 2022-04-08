import PropTypes from 'prop-types';


const PrimeraApp = ({ saludo, edad}) => {
    //Todas las funciones  pueden devolver 1 unico elemento, para devolver varias etiquetas desde una función
    //Para poder devolver varias etiquetas, se utiliza el elemento  de abrir y cerrar llave

    const saludo1 = {
        nombre: 'Matias',
        Apellido: 'Jaime',
    }; // Para poder mostrar variables en el HTML, hay que usar los corchetes {}
    // Para poder mostrar un objeto, hay que primero pasarlo a Json

    return <>
        <pre>{JSON.stringify(saludo1.nombre)}</pre>
        <h1>Mi primera Aplicación</h1>
        <h1>{edad}</h1>
    </>

};

//Sirve para definir las propiedades del componente eL Tipo del valor y si es requerido o no
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    edad: PropTypes.number,
}

//Sirve para definir los valores por defecto de las distintas propiedades del componente
PrimeraApp.defaultProps = {
    saludo: 'Hola', 
    edad: 15,
}
export default PrimeraApp;