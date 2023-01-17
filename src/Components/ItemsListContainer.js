import {useState, useEffect} from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"


// LOGICA FUERTE, dentro de este tiene que estar las cartas y esas cosas mas tranqui

const ItemsListContainer =(props)=>{

    let [count, setCount]=useState(0)
    const[products, setProducts]= useState([])
    const{categoryId} =useParams()


    useEffect(()=>{
        
        const URL = categoryId ? `https://fakestoreapi.com/products/category/${categoryId}` : 'https://fakestoreapi.com/products/'
           
        const prods = fetch(URL)
        prods
            .then((respuesta)=>{
            const productos=respuesta.json()
            return productos;
            })
            .then((productos)=>{
            console.log(productos)
            setProducts(productos)
            })
            .catch((error)=>{
            console.log(error)
            })
    },[categoryId])
   



    const addCart=()=>{
        setCount(count+1)
        console.log(count)
    }

    const lessCart=()=>{
        if(count>0){
            setCount(count-1)
            console.log(count) 
        }
        
    }

    return(
        <>
            {/* {props.greeting} */}
            <div>
                {/* <h2>Tengo: {count} </h2>
                <button onClick={addCart}>+</button>
                <button onClick={lessCart}>-</button> */}
                <ItemList products={products}/>
            </div>
        
        </>
    )
}
export default ItemsListContainer