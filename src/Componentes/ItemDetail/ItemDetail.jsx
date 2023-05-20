import styles from "./ItemDetail.module.css";
import CounterContainer from "../Counter/CounterContainer";

export const ItemDetail = ({product, onAdd}) => {
  return (
    <div className={styles.ContainerDetalle}>

        <img src={product.img} alt="Imagen del producto" />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <span className={styles.DetPrecio}>${product.price}</span>
        {
          product.stock > 0 ? <div><CounterContainer stock={product.stock} onAdd={onAdd} initial={undefined}/></div> : <h2>No hay unidades disponibles</h2>
        }
        
    </div>
  )
}