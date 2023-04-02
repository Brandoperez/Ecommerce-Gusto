import { CardWidget } from "../CardWidget/CardWidget";
import styles from "./Navbar.module.css";
import imgLogo from "../../Assets/Image/logo-ecommerce.jpg";

export const Navbar = () => {
  return (
    <div className={styles.ContainerNavbar}>
       <img className={styles.imgLogo} src={imgLogo} 
       alt="Imagen del e-commerce para el Logo" />

       <ul className={styles.ContainerUl}>
        <li>Tienda</li>
        <li>Arepas</li>
        <li>Empanadas</li>
        <li>Estilo Zuliano</li>
        <li>Postres</li>
        </ul> 
        
       <CardWidget />
    </div>
  )
}
