import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { db } from '../firebase';
import { collection, getDocs, query, where } from "firebase/firestore"


const ItemsListContainer =()=>{
    
    const[productos, setProducts]= useState([])
    const{categoryId} =useParams()

    useEffect(()=>{
      const productosCollection=collection(db,"productos")
      var filtro=query(productosCollection)
      

      if (categoryId){
        filtro = query(productosCollection,where("categoria","==",categoryId))
      }
      const getProducts= getDocs(filtro)
      
      getProducts.then((respuesta) => {
        const productos = respuesta.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        setProducts(productos)
      }).catch((error) => {
        console.log(error)
      })
    }, [categoryId])

    return(
        <>
            <div>
                <ItemList productos={productos}/>
            </div>
        
        </>
    )
}
export default ItemsListContainer

