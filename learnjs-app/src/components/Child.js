import React, { useEffect } from 'react';

function Child({returnComment}) {
    useEffect(() => {
        console.log('Foi Chamado!');
    }, [returnComment]); 

 return (
    <div>
        {returnComment('Pedro')}
    </div>
 );
}

export default Child;
