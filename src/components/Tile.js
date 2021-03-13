import React from 'react';

function Tile({ title, children, image, alternative_text }) {

    return (
        <section>
            <h2>{title}</h2>
            {children}
            <img src={image} alt={alternative_text}/>
        </section>

    );
};


export default Tile;