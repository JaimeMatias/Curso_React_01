// //Importaciones Standar
// import React from 'react';
// import ReactDOM from 'react-dom/client';



// //Imporaciones Custom Css
// import './index.css';

// //Importaciones Custom Componentes
// import PrimeraApp from './PrimeraApp';
// import CounterApp from './CoounterApp';

// //Busco el ID del container en el cual voy a ingresar la etiqueta
// const container = document.querySelector('#root');

// //Añado en la pagina web la etiqueta
// const root = ReactDOM.createRoot(container);
// const aplicaciones= <div>
//     <PrimeraApp  saludo='El valor de la Primer Property' />
//     <CounterApp edad={21}/>
// </div>
// root.render(aplicaciones);

import React from 'react';
import ReactDOM from 'react-dom/client';
// import PrimeraApp from './PrimeraApp'
import CounterApp from './CoounterApp';

import './index.css';



const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
const aplicaciones= <div><CounterApp /></div>

root.render(aplicaciones);
// ReactDOM.render( <PrimeraApp saludo="Hola, Soy Goku" />  , divRoot );

