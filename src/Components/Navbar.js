import CartWidget from "./CartWidget"

const Navbar =()=>{
    return(
        <nav>
            <h1 class="nav-tittle">ANANTA</h1>
            <div class="nav-cont">
                <a href="#" class="nav-cont-link">Carteras</a>
                <a href="#" class="nav-cont-link">Alfombras</a>
                <a href="#" class="nav-cont-link">Canastos</a>
                <a href="#" class="nav-cont-link">Accesorios</a>
                <a href="#" class="nav-cont-link">Insumos</a>
                <a href="#" class="nav-cont-link">Cursos</a>
            </div>
            <CartWidget/>
        </nav>
        
    )
}

export default Navbar