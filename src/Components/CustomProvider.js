import { createContext, useContext, useState } from "react"


const contexto = createContext()
const Provider = contexto.Provider

export const useCart=()=>{
    const valorDeContexto=useContext(contexto)
    return valorDeContexto
}




const CustomProvider=({children})=>{

    const [cart, setCart]=useState([])


    const addProduct=(producto,cantidad)=>{
        if(isinCart(producto.id)){
            setCart(cart.map((n)=>{
                return n.id===producto.id?{...n,cantidad:n.cantidad+cantidad}:n})
            )
        }else{
            setCart([...cart,{...producto,cantidad:cantidad}])
        }
    }


    const deleteProduct=(producto)=>{
        const retorno=cart.filter((n)=>n.producto!==producto.producto)
        setCart(retorno)
        return retorno
    }

    const emptyCart=()=>{
        setCart([])
        totalProducto(0)
    }

    const isinCart=(id)=>{
        cart.find((n)=>n.id===id)
    }

    const totalProducto=(producto)=>{
        let total=0;
        cart.forEach(producto=>{
            total=total+producto.cantidad
        })
        return total
    }


    const valorDeContexto={
        cart: cart,
        totalProducto: totalProducto,
        setCart:setCart,
        addProduct:addProduct,
        deleteProduct:deleteProduct,
        emptyCart:emptyCart,
        isinCart:isinCart
    }

    return(
        
        <Provider  value={valorDeContexto}> {children}</Provider>
        
    )

}
export default CustomProvider