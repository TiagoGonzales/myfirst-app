import axios from 'axios';
import { useState, useCallback } from 'react';
import Child from './Child';

export default function CallBackTutorial() {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState('Yo, pls sum to the channel!');

    const returnComment = useCallback(
        (name) => {
            return data + name;
        },

        [data]
    );    
          
        return (
        <div className='App'>
            <Child returnComment = {returnComment}/>
            <button 
                onClick={() => {
                    setToggle(!toggle);
                }} 
            >
                {''} 
                Toggle
            </button>
            {toggle && <h1> Toggle </h1>}
        </div>
      );
    }        

