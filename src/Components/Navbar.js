import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

const Navbar =()=>{
    return(
        <nav>
            <Link class="nav-tittle" to="/">ANANTA</Link>
            <div class="nav-cont">
                <Link to="category/electronics" class="nav-cont-link">electronics</Link>
                <Link to="category/men's clothing" class="nav-cont-link">men's clothing</Link>
                <Link to="category/women's clothing" class="nav-cont-link">women's clothing</Link>
                <Link to="category/jewelery" class="nav-cont-link">jewelery</Link>
            </div>
            <CartWidget/>
        </nav>
        
    )
}

export default Navbar