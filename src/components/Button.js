import React from 'react';

function Button({ title, disabled }) {

    return (
        <button disabled={disabled} type="button" onClick={() => console.log(title)}>{title}</button>
    );
};


export default Button;