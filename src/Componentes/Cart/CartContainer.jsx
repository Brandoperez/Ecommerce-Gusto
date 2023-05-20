import React, { useContext } from 'react'
import  Cart  from './Cart'
import { CartContext } from '../../Context/CartContext'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'


const CartContainer = () => {

  const {cart, clearCart, deleteProductById, getTotalPrice} = useContext(CartContext);
  let total = getTotalPrice()
  const navigate = useNavigate();

  const clearCartWithAlert = () =>{
    Swal.fire({
      title: 'Quieres eliminar los productos del carrito?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      denyButtonText: `No, mantener`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire('Se eliminaron los productos del carrito!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Todo queda como estaba', '', 'info')
      }
    })
  }
  return (
    <div>
    <Cart navigate={navigate} total={total} cart={cart} clearCartWithAlert={clearCartWithAlert} deleteProductById={deleteProductById} getTotalPrice={getTotalPrice}/>
    </div>
  )
}

export default CartContainer