import { useCart } from './CustomProvider'
import  ItemCount  from './ItemCount'
import {useState} from 'react'


function ItemDetail({producto}) {
    
    const{agregando}=useCart()
    const [confirmado, setConfirmado] = useState(false)
    const [cantidad, setCantidad] = useState(0)

    const onAdd=(param)=>{
        setCantidad(param)
        setConfirmado(true)
    }
    const handleClick=()=>{
        agregando(producto,cantidad)
    }

    

    return (
        <>
            <article class="prod">
                <h3>{producto.titulo}</h3>    
                <p>{producto.precio}</p>
                <img src={producto.img} class="tamaño"></img>
                <p>{producto.descripcion}</p>

                <ItemCount stock={producto.stock} onAdd={onAdd}/>
                {confirmado && <button onClick={handleClick} id="Añadiracarrito" >Añadir al carrito </button>}


            </article>
        </>
    )
}

export default ItemDetail
