import React from 'react';
import ReactDOM from 'react-dom';
import { CounterApp } from './components/01-useState/CounterApp';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
import FormWithCustomHook from './components/02-useEffect/FormWithCustomHook';
import SimpleForm from './components/02-useEffect/SimpleForm';
import MultipleCustomHooks from './components/03-examples/MultipleCustomHooks';
import FocusScreen from './components/o4-useRef/FocusScreen';
import { HookApp } from './HookApp';

import './index.css';

ReactDOM.render(
  <>
    <HookApp />
    <CounterApp />
    <CounterWithCustomHook />
    <SimpleForm/>
    <FormWithCustomHook/>
    <MultipleCustomHooks/>
    <FocusScreen/>

  </>,  
  document.getElementById('root')
);

