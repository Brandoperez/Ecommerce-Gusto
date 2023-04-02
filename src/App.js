import logo from './logo.svg';
import './App.css';
import { Navbar } from './Componentes/Navbar/Navbar';
import ItenListContainer from './Componentes/ItemList/ItenListContainer';

function App() {
  
    let saludo = "!Bienvenido al sistema Brando!";

  return (
    <div className="App">
      
      <Navbar />
      <ItenListContainer saludo={saludo} />
    </div>
  );
}


export default App;
