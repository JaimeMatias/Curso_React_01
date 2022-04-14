import React from "react";
import {shallow} from 'enzyme';
import CounterApp from "../CoounterApp";

describe('Pruebas en <CounterApp  />',()=>{


    test('Debe de mostrar <CounterApp  /> correctamente', () => {
       const wrapper =shallow( <CounterApp edad={18}/>);
     })
    
    })
    
