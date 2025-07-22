import { useState } from "react";
import ProductCart from "./ProductCart";
import ProductHeader from "./ProductHeader";
import Products from "./Products";

const ProductSection = () => {
  const [cartProducts, setCartProducts] = useState([]);

  const handleProducts = (product) => {
    const found =
      cartProducts.length > 0 &&
      cartProducts.find((prod) => prod.id === product.id);

    if (!found) {
      setCartProducts([...cartProducts, product]);
    } else {
      setCartProducts(cartProducts.filter((item) => item.id !== product.id));
    }
  };
  return (
    <div class="container mx-auto px-4 md:px-8 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2">
          <ProductHeader />
          <Products
            handleProducts={handleProducts}
            cartProducts={cartProducts}
          />
        </div>
        <ProductCart cartProducts={cartProducts} />
      </div>
    </div>
  );
};

export default ProductSection;
