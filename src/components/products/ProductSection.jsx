import { useState } from "react";
import { getAllProducts } from "../../data";
import ProductCart from "./ProductCart";
import ProductHeader from "./ProductHeader";
import Products from "./Products";

const ProductSection = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [sortProducts, setSortProducts] = useState("popular");

  const allProducts = getAllProducts();

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

  const sortedProducts =
    sortProducts === "popular"
      ? allProducts
      : [...allProducts].sort((a, b) => {
          if (sortProducts === "newest") {
            return new Date(b.date) - new Date(a.date);
          } else if (sortProducts === "low") {
            return a.price - b.price;
          } else {
            return b.price - a.price;
          }
        });

  return (
    <div class="container mx-auto px-4 md:px-8 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2">
          <ProductHeader
            sortProducts={sortProducts}
            setSortProducts={setSortProducts}
          />
          <Products
            handleProducts={handleProducts}
            cartProducts={cartProducts}
            sortedProducts={sortedProducts}
          />
        </div>
        <ProductCart
          cartProducts={cartProducts}
          handleProducts={handleProducts}
        />
      </div>
    </div>
  );
};

export default ProductSection;
