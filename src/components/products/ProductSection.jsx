import { useContext, useState } from "react";
import { CartContext } from "../../context";
import { getAllProducts } from "../../data";
import ProductCart from "./ProductCart";
import ProductHeader from "./ProductHeader";
import Products from "./Products";

const ProductSection = () => {
  const [sortProducts, setSortProducts] = useState("popular");
  const productLists = getAllProducts();
  const [allProducts, setAllProducts] = useState(productLists);
  const { cartProducts, setCartProducts } = useContext(CartContext);

  const handleProducts = (product) => {
    const found = cartProducts.find((prod) => prod.id === product.id);

    if (!found) {
      setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
      setAllProducts(
        allProducts.map((item) =>
          item.id === product.id ? { ...item, stock: item.stock - 1 } : item
        )
      );
    } else {
      setAllProducts(
        allProducts.map((item) =>
          item.id === product.id
            ? { ...item, stock: item.stock + found.quantity }
            : item
        )
      );
      setCartProducts(cartProducts.filter((item) => item.id !== product.id));
    }
  };

  const handleProductCount = (type, productId) => {
    const cartItem = cartProducts.find((prod) => prod.id === productId);
    const product = allProducts.find((product) => product.id === productId);

    if (type === "increment" && product.stock > 0) {
      setCartProducts(
        cartProducts.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      setAllProducts(
        allProducts.map((product) =>
          product.id === productId
            ? { ...product, stock: product.stock - 1 }
            : product
        )
      );
    } else if (type === "decrement" && cartItem.quantity > 1) {
      setCartProducts(
        cartProducts.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
      setAllProducts(
        allProducts.map((product) =>
          product.id === productId
            ? { ...product, stock: product.stock + 1 }
            : product
        )
      );
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
          handleProductCount={handleProductCount}
        />
      </div>
    </div>
  );
};

export default ProductSection;
