import React, { useRef } from "react";
import ButtonEX from "./ButtonEX";

function ImperativeHandle() {
    const buttonRef = useRef(null);
    return (
        <div>           
            <button
                onClick={() => { 
                    buttonRef.current.alterToggle();
                }}   
            >
                Button from Parent
            </button>
        
            <ButtonEX ref={buttonRef}/>
        </div>
    );
} 

export default ImperativeHandle;