import ItemList from "./ItemList";
import {products} from "../../ProductsMosk";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ItemListContainer = ( ) => {

    let [items, setItems] = useState([]);
    const{categoryName} = useParams();

   useEffect( () => {

    const productsFiltered = products.filter(prod => prod.category === categoryName);
    const tarea = new Promise((resolve, reject) => {
    resolve(categoryName ? productsFiltered : products);
    //reject("No se pudo resolver");
});

tarea
.then((res) => {setItems(res)})
.catch((error) => {console.log("Catch:", error)});
}, [categoryName])

    return (
    <div>
        <ItemList items = {items} />

    </div>
    );
}

export default ItemListContainer;

