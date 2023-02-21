import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from '../firebase'
import { collection, getDoc, doc } from 'firebase/firestore'
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const { id } = useParams()

    useEffect(() => {

        const productosCollection = collection(db, "productos")
        const ref = doc(productosCollection, id)
        const pedido = getDoc(ref)

        pedido
            .then((respuesta) => {
                const producto = respuesta.data()
                setProducto(producto)
            })
            .catch((error) => {
                console.log(error)
            })
            
    }, [id])
    return (
        <>
            <ItemDetail producto={producto} />
        </>
    )

}

export default ItemDetailContainer











// toast.info ("Cargando productos...")

// const productosCollection = collection(db, "productos")
// const pedidoFirestone=getDocs(productosCollection)

// pedidoFirestone
//     .then((res)=>{
//       const productos= res.docs.map(doc=>({...doc.data(),id:doc.id}))

//       toast.dismiss()
//       toast.success("Productos cargados")
      
//       setProduct(productos)
//     })  
//     .catch((error)=>{
//       toast.error("Los elementos no se cargaron")
//     })