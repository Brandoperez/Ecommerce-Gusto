import { CardWidget } from "../CardWidget/CardWidget";
import styles from "./Navbar.module.css";
import imgLogo from "../../Assets/Image/logo-ecommerce.jpg";
import { Outlet, Link} from "react-router-dom";


export const Navbar = () => {
  return(
    <div>
    <div className={styles.ContainerNavbar}>
    <Link to="/"><img className={styles.imgLogo} src="https://res.cloudinary.com/dmfl5dwbb/image/upload/v1682299563/logo_pwvgqe.jpg" 
       alt="Imagen del e-commerce para el Logo" /></Link>
       

      <ul className={styles.ContainerUl}>
        <Link to="/">Todos</Link>
        <Link to="/category/Women">Women</Link>
        <Link to="/category/Man">Man</Link>
        <Link to="/category/Buzo">Sweatshirt or Jacket</Link>
        <Link to="/category/Custon">Custon</Link>
      </ul>
      <CardWidget />
    </div>

    <Outlet />
  </div>
  );
};


