import React, { useState } from 'react';

/**
 * Create a component MessageBox with variable message (useState). 
 * As return JSX, render the textbox. 
 * On typing content into the text box,
 * it should live update on red color if count of words in textbox is less than 5.
 * Else, it should live update to green color.
 */

export default function NumberOps() {
    var [colorText, setColor] = useState('red');
    function changeColor() {
        if (document.messageForm.message.value.length < 5) {
            setColor(colorText = "red");
        } else {
            setColor(colorText = "green");
        }
    };
    return (
        <>
            <form name='messageForm'>
                <label>
                    Message:
                    <input onKeyUp={changeColor} type="text" name="message" style={{ color: colorText }} />
                </label>
            </form>
        </>
    );
}