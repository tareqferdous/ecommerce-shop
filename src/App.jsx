import "./App.css";
import Shop from "./components/shop/Shop";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <ProductProvider>
      <Shop />
    </ProductProvider>
  );
}

export default App;
