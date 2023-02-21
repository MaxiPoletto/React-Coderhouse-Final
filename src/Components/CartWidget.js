import { NavLink } from "react-router-dom";
import { useCart } from "./CustomProvider";

const CartWidget=()=>{
    const {totalProducto} = useCart()
    

    return(

        <NavLink to="/cart">
            <span className="material-icons">shopping_cart</span>
            <span>{totalProducto()}</span>
        </NavLink>
       
    )
}

export default CartWidget;





