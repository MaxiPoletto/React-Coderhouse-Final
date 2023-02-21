import { useState } from "react"
import { useCart } from "./CustomProvider";

const Cart=()=>{
    const [nombre,setNombre] = useState("")
    const [email,setEmail] = useState("")
    const { cart, totalProducto, emptyCart, deleteProduct } = useCart()
    

    const handleClick = (e) => {
        const orden = {
            usuario: {
                nombre: nombre,
                email: email,
            },
            productos: [],
            total: totalFinal(),
        }
    }
    function handleNameChange(e) {
        setNombre(e.target.value);
    }
       
    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
        
    function precioFinal (producto){
        let total = 0;
        total += producto.precio * producto.cantidad
        return total
    }

    const totalFinal = () => {
        let total = 0;
        cart.forEach(producto => {
        total += precioFinal(producto)
        });
        return total
    }

    const deleteItem = (producto) => {
        deleteProduct(producto);
    }
    
    console.log("Cargo")
    return(
        <div>
           
            {
                cart.map((producto) => {
                    return (
                        <div>
                            <img src={producto.img} alt="" />
                            <h3>{producto.producto}</h3>
                            <p>Precio:  ${producto.precio} </p>
                            <p>Cantidad: {producto.cantidad}</p>
                            <p>Importe Total Producto: ${precioFinal(producto)} </p>
                            <button onClick={() => deleteItem(producto)}> QUITAR DEL CARRITO</button>
                        </div>
                    )
                 })
            }
            <div className="Totalapagar">
                <h2>Importe total del carrito: ${totalFinal()} </h2>
            </div>
           
            <button onClick={emptyCart }>vaciarCarrito</button>
            <button onClick={handleClick}>terminar compra</button>

            <form>
                <label>
                    <span>Direccion de correo electronico</span>
                    <input type="email" value={email} onChange={handleEmailChange} placeholder="correo electronico"/>
                </label>
                <label>
                    <span>Nompre y apellido</span>
                    <input type="text" value={nombre} onChange={handleNameChange} placeholder="Nombre y apellido"/>
                </label>
                <button onClick={handleClick}>Finalizar compra</button>
            </form>
        </div>
    )
}

export default Cart;




