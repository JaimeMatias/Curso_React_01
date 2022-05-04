import React, { useCallback, useState } from 'react'
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {
    const [counter, setCounter] = useState(10);
    const increment = useCallback((num) => { //Devuelve una versión memorizada de una función, se la dependencia no cambio
        setCounter(c=>c + num)
    }, [setCounter])
    return (
        <div>
            <h1>useCallBack hook</h1>
            <p>Hook: ${counter}</p>
            <ShowIncrement increment={increment} />
        </div>
    )
}

export default CallbackHook
