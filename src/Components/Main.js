import ItemDetailContainer from "./ItemDetailContainer";
import ItemsListContainer from "./ItemsListContainer";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart"

const Main=()=>{

    return(
        <div class="main">
            <Routes>
                <Route path="/"element={<ItemsListContainer/>}/>
                <Route path="/categoria/:categoryId" element={<ItemsListContainer/>}/>
                <Route path="/item/:id"element={<ItemDetailContainer/>}/>
                <Route path="/cart"element={<Cart/>}/>
               
            </Routes>
            
        </div>
    )
}

export default Main;