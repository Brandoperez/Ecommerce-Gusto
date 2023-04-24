import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  {Navbar}  from "./Componentes/Navbar/Navbar";
import ItemListContainer from "./Componentes/ItemList/ItemListContainer";
import { ItemDetailContainer } from "./Componentes/ItemDetail/ItemDetailContainer";


function App() {


  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Navbar />}>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:categoryName" element={<ItemListContainer />} />
              <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
              <Route path="*" element={<h1>La ruta seleccionada no existe.</h1>} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
