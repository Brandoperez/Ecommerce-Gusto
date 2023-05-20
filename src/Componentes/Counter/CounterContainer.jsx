import { useEffect, useState } from "react"
import Counter from "./Counter"
import { useNavigate } from 'react-router-dom'


const CounterContainer = ({stock, onAdd, initial=1}) => {
    const [counter, setCounter] = useState(initial);
    const navigate = useNavigate();

    useEffect(() =>{
        setCounter(initial)
    }, [initial])
   

    const sumar = () =>{
        counter < stock ? setCounter(counter + 1): alert("No hay más unidades disponibles");
    }
    
        const restar = () => {
            if(counter > 1){
                setCounter(counter - 1);
            };
        }
  return (
    <div><Counter navigate={navigate} sumar={sumar} restar={restar} onAdd={onAdd} counter={counter}/></div>
  )
}

export default CounterContainer