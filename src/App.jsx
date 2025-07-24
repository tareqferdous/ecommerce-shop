import { useState } from "react";
import "./App.css";
import Shop from "./components/shop/Shop";
import { CartContext } from "./context";

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts }}>
      <Shop />
    </CartContext.Provider>
  );
}

export default App;
