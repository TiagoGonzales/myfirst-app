import React, { forwardRef, useImperativeHandle, useState } from "react";

const ButtonEX = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(true);
    
    useImperativeHandle(ref, () => ({
        alterToggle() {
          setToggle(!toggle);
        },
    }));

    return (
        <div>
            <button> Button From Child</button>
            {toggle && <spam>toggle</spam>}
        </div>
    );
});

export default ButtonEX;