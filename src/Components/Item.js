import { Link } from "react-router-dom"

const Item=({product})=>{
    return(
        <>
            <article class="prod">
                <h3>{product.title}</h3>    
                <p>{product.price}</p>
                <img src={product.image} class="tamaño"></img>
                <Link to={`item/${product.id}`} >ver mas</Link>
            </article>
        </>
    )
}

export default Item