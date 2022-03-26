import React, { useState } from 'react';

/**
 * Create a component NumberOps, which will have useState variable num initialised to 0.
 * Have two buttons increment button and decrement button. 
 * On increment button click, the value should be increased and vice versa for decrement button.
 */

export default function NumberOps() {
    var [num, setNum] = useState(0);
    return (
        <>
            <h2>Number: {num}</h2>
            <button onClick={() => setNum(num + 1)}>Increment Number</button>
            <button onClick={() => setNum(num - 1)}>Decrement Number</button>
        </>
    );
}