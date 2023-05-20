import { BsCart2 } from 'react-icons/bs';
import styles from "./CardWidget.module.css";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';


export const CardWidget = () => {
  const {getTotalQuantity} = useContext(CartContext);
  let total = getTotalQuantity()

  return (
    <Link to="/cart">
      <div className={styles.contCarrito}>
        <div className={styles.IconoCarrito}>
          < BsCart2 />
        </div>
        <div className={styles.contCirculo}>
          <span>{total}</span>
        </div>
      </div>
    </Link>
    
    
  )
}
