import {useState} from "react"

const ItemCount=({stock,onAdd})=>{
    const[cont,setCont]= useState(0)

    const handleSumar=()=>{
        if (cont < stock) {
            setCont(cont + 1)
        }
    }
    
    const handleRestar=()=>{
        if (cont < stock) {
            setCont(cont - 1)
        }
    }
    const handleConfirmar = () => {
        onAdd(cont)
    }
    const handleResetear = () => {
        setCont(0)
    }
    

    return(
        <>
            <button onClick={handleResetear}>Reset</button>
         
            <button disabled={cont === stock} onClick={handleSumar}>+</button>
            <p>{cont}</p>
            <button disabled={cont === 0} onClick={handleRestar}>-</button>

            {<button disabled={cont < 1 || stock < 1} onClick={handleConfirmar}>Confirmar</button>}
        </>
    )
}
export default ItemCount
