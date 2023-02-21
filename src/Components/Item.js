import { Link } from "react-router-dom"

const Item=({producto})=>{
    return(
        <>
            <article class="prod">
                <h3>{producto.titulo}</h3>    
                <p>{producto.precio}</p>
                <img src={producto.img} class="tamaño"></img> 
                <Link to={"/item/" + producto.id} >ver mas</Link>
            </article>
        </>
    )
}

export default Item