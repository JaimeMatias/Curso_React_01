//Importaciones Standar
import React from 'react';
import ReactDOM from 'react-dom/client';



//Importaciones Custom
import PrimeraApp from './PrimeraApp';
import './index.css';
//Busco el ID del container en el cual voy a ingresar la etiqueta
const container = document.querySelector('#root');

//Añado en la pagina web la etiqueta
const root = ReactDOM.createRoot(container);
root.render(<PrimeraApp />);
