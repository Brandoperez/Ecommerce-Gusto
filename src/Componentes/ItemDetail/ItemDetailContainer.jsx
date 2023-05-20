import React, {useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom"
import { CartContext } from "../../Context/CartContext";
import Swal from 'sweetalert2'
import {getDoc, collection, doc} from "firebase/firestore";
import { dataBase } from "../../firebaseConfig";


export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const {agregarCarrito, getQuantityByID} = useContext(CartContext)


  let {id} = useParams();

  useEffect(() => {
    const itemCollection = collection(dataBase, "products");
    const refDoc = doc(itemCollection, id);
    getDoc(refDoc).then((res) => setProduct({
      ...res.data(), id: res.id,
    })
    ).catch((err) => console.log(err));

  }, [id]);

  const onAdd = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad
    }
    agregarCarrito(data)
    Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Se agregó correctamente',
    showConfirmButton: false,
    timer: 1500
                })
  }
    
  let cantidadTotal = getQuantityByID(product.id);

  return (
    <div>
        <ItemDetail product ={product} onAdd= {onAdd} />
    </div>
  )
}



  

 