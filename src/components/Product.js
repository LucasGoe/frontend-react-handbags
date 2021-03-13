import React from 'react';

function Product({ title, image, description, price}) {

    return (
        <article>
            <span>{title}</span>
            <img src={image} alt={description}/>
            <p>{description}</p>
            <h4>€ {price},-</h4>
        </article>
    );
};

export default Product;