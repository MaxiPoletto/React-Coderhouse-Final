import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

const Navbar =()=>{
    return(
        <nav>
            <Link class="nav-tittle" to="/">ANANTA</Link>
            <div class="nav-cont">
                <Link to="/categoria/cursos" class="nav-cont-link">cursos</Link>
                <Link to="/categoria/canastos" class="nav-cont-link">canastos</Link>
                <Link to="/categoria/alfombras" class="nav-cont-link">alfombras</Link>
                <Link to="/categoria/carteras" class="nav-cont-link">carteras</Link>
            </div>
            <Link to="/cart"><CartWidget/></Link>
        </nav>
        
    )
}

export default Navbar