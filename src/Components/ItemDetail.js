import React from 'react'

function ItemDetail({product}) {
    return (
        <>
            <article class="prod">
                <h3>{product.title}</h3>    
                <p>{product.price}</p>
                <img src={product.image} class="tamaño"></img>
                <p>{product.description}</p>
            </article>
        </>
    )
}

export default ItemDetail
