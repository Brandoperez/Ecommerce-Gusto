import  FormCheckout  from './FormCheckout'
import {useFormik} from "formik";
import { useContext, useState } from 'react';
import * as Yup from "yup";
import { CartContext } from '../../Context/CartContext';
import { dataBase } from '../../firebaseConfig';
import {addDoc, collection, updateDoc, doc} from "firebase/firestore";

export const FormCheckoutContainer = () => {

  const {cart, getTotalPrice, clearCart} = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

    const checkoutFn = (data) =>{
      let total = getTotalPrice();
      let dataOrder = {
        buyer:  data,
        items : cart,
        total : total
      }

      const orderCollection = collection(dataBase, "orders");
      addDoc(orderCollection, dataOrder).then((res) => setOrderId(res.id));

      cart.map((product) =>
        updateDoc(doc(dataBase, "products", product.id), {
          stock : product.stock - product.quantity,
        })
      );

      clearCart()
    }
 
  const {handleSubmit, handleChange, errors} = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      confirmarEmail: "",
      telefono: "",
    },
    onSubmit: checkoutFn,
    validationSchema: Yup.object().shape({
      nombre: Yup.string().required("Este campo es obligatorio").min( 3, "El Nombre debe tener minimo 3 caracteres").max(15, "El Nombre debe tener máximo 15 carácteres"),
      email: Yup.string().email("Este campo debe ser un email").required("Este campo es obligatorio"),
      confirmarEmail: Yup.string().required("este campo es obligatorio").oneOf([Yup.ref("email")], "Los correos no coinciden"),
      telefono: Yup.number().required("Este campo es obligatorio")
    }),
   validateOnChange : false

  });

  return (
    <div>{
      orderId ? (

        
        <h1 style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Gracias por su compra, su numero de orden es: {orderId}</h1>
           ) : <FormCheckout handleSubmit={handleSubmit} handleChange={handleChange} errors={errors} />
              }
    </div>
  )
}