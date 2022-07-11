import { useLayoutEffect, useEffect, useRef } from 'react';

function LayoutEffectsTutorial() {
    const inputRef = useRef(null);
   
    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    },[]);
    
    useEffect(() => {
        inputRef.current.value = 'Hello'
    },[]);

    return (
        <div className='app'>
            <input ref={inputRef} value='Pedro' style={{width:200, height:80}}></input>
        </div>
    );
}

export default LayoutEffectsTutorial;