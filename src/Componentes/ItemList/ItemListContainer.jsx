import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RiseLoader } from "react-spinners";
import { dataBase } from "../../firebaseConfig";
import {getDocs, collection, query, where} from "firebase/firestore";


const ItemListContainer = ( ) => {

    const [items, setItems] = useState([]);
    const{categoryName} = useParams();

   useEffect( () => {

    let filtrado;
    const itemsCollection = collection(dataBase, "products");

    if(categoryName){
        const productFiltered = query(itemsCollection, where("category", "==", categoryName))
        filtrado = productFiltered;
    }else{
        filtrado = itemsCollection;
    }

    getDocs(filtrado)
    .then((res) => {
        const products = res.docs.map( product => {
            return {
                ...product.data(), id: product.id
            }
        }) 
        setItems(products)
    }).catch((err) => console.log(err))
    
}, [categoryName]);

    return (
        <div>
        {items.length === 0 ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <RiseLoader color="#a2a2a2" margin={5}/>
          </div>
        ) : (
          <ItemList items={items} />
        )}

      </div>
    );
}

export default ItemListContainer;

