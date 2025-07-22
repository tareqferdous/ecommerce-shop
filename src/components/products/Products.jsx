import SingleProduct from "./SingleProduct";

const Products = ({ handleProducts, cartProducts, sortedProducts }) => {
  return (
    <div class="product-grid">
      {sortedProducts.map((product) => (
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
