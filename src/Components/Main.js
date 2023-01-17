import ItemDetailContainer from "./ItemDetailContainer";
import ItemsListContainer from "./ItemsListContainer";
import { Route, Routes } from "react-router-dom";


const Main=()=>{

    return(
        <div class="main">
            <Routes>
                <Route path="/"element={<ItemsListContainer/>}/>
                <Route path="/category/:categoryId" element={<ItemsListContainer greeting="Holaaa"/>}/>
                <Route path="/item/:id"element={<ItemDetailContainer/>}/>
                {/* <Route path="" element={}/> */}
            </Routes>
            
        </div>
    )
}

export default Main;