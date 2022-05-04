import React, { useRef } from 'react'

const FocusScreen = () => {

const inputRef=useRef()

    const handleClick = () => {
        inputRef.current.select();
    }


    return (
        <div>
            <h1>Focus Screen</h1>
            <input
            ref={inputRef}
                id='input_id'
                className='form-control'
                placeholder='Su nombre' />
            <button className='btn btn-outline-primary'
                onClick={handleClick}
            >
                Focus
            </button>
        </div>
    )
}

export default FocusScreen
