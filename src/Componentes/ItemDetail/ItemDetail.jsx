import { Link} from "react-router-dom";
import styles from "./ItemDetail.module.css";

export const ItemDetail = ({product}) => {
  return (
    <div className={styles.ContainerDetalle}>
        <img src={product.img} alt="Imagen del producto" />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <span className={styles.DetPrecio}>${product.price}</span>
        <Link className={styles.DetalleBtn} to={"/"}>Volver</Link>
    </div>
  )
}