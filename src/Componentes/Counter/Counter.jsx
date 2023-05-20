import styles from "./Counter.module.css";
import {Button } from "@mui/material";

const Counter = ({sumar, restar, onAdd, counter, navigate}) => {
  return (
         <div>
          <div className={styles.Controles}>
            <button onClick={sumar}>+</button>
            <h2>{counter}</h2>
            <button onClick={restar}>-</button>
          </div>
          <div className={styles.contButton}>
            <Button className={styles.botonCard} onClick={()=> onAdd(counter)}>Agregar</Button>
            <Button className={styles.botonCard} onClick={() => navigate("/")}>Volver</Button>
          </div>
        </div>
  )
}

export default Counter