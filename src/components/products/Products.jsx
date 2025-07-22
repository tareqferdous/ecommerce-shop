import { getAllProducts } from "../../data";
import SingleProduct from "./SingleProduct";

const Products = ({ handleProducts, cartProducts }) => {
  const allProducts = getAllProducts();
  return (
    <div class="product-grid">
      {allProducts.map((product) => (
        <SingleProduct
          key={product.id}
          product={product}
          handleProducts={handleProducts}
          cartProducts={cartProducts}
        />
      ))}
    </div>
  );
};

export default Products;
