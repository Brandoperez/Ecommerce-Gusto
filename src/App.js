import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  {Navbar}  from "./Componentes/Navbar/Navbar";
import ItemListContainer from "./Componentes/ItemList/ItemListContainer";
import { ItemDetailContainer } from "./Componentes/ItemDetail/ItemDetailContainer";
import CartContainer from "./Componentes/Cart/CartContainer";
import CartContextProvider from "./Context/CartContext";
import { FormCheckoutContainer } from "./Componentes/FormCheckout/FormCheckoutContainer";


function App() {


  return (
    <BrowserRouter>
    <CartContextProvider>
        <Routes>
            <Route element={<Navbar />}>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:categoryName" element={<ItemListContainer />} />
              <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/checkout" element={<FormCheckoutContainer />} />
              <Route path="*" element={<h1>La ruta seleccionada no existe.</h1>} />
            </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
