import { Button } from "@mui/material";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";



const Cart = ({cart,  clearCartWithAlert, deleteProductById, total, navigate}) => {
  return (
    <div> 

      <div className={styles.cartCont}>
        <div className={styles.cartItems}>
          {cart.map((product) => {
            return (
          
              <div key={product.id} className={styles.cartItem}>
                <img src={product.img} alt="" />
                <div className={styles.cartInfoItem}>
                  <h2>{product.title}</h2>
                  <h3>${product.price}</h3>
                  <h3>Unidad {product.quantity}</h3>
                </div>
              
              <Button className={styles.btnCart}  onClick={()=> deleteProductById(product.id)}>Eliminar</Button>
              </div>           
              );
           })}
           <div>
           {cart.length > 0 ? (
            <div className={styles.contCart}>
              <Button className={styles.btnCart} variant="contained" onClick={() => navigate("/checkout")}>Terminar la compra</Button>
              <Button className={styles.btnCart}  onClick={clearCartWithAlert} variant="contained">Vaciar carrito</Button>
            </div>
          ) : (
            <Link to="/">
              <Button variant="contained" className={styles.btnCart}>Agrega productos</Button>
            </Link>
          )}

          <h4 className={styles.total}>El total del carrito es ${total}</h4>
           </div>
         </div>

        
        </div>
      </div>

  );
};

export default Cart
