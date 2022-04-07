import React from 'react';
import ReactDOM from 'react-dom/client';

import { render } from 'react-dom';

//Defino la etiqueta a crear

const saludo = <h1>Hola Mundo</h1>

//Busco el ID del container en el cual voy a ingresar la etiqueta
const container = document.querySelector('#root');

//Añado en la pagina web la etiqueta
const root = ReactDOM.createRoot(container);
root.render(saludo);
