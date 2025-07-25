import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import ProductCart from "./ProductCart";
import ProductHeader from "./ProductHeader";
import Products from "./Products";

const ProductSection = () => {
  const { state, dispatch } = useContext(ProductContext);
  const { allProducts, cartProducts, sortType } = state;

  const handleProducts = (product) => {
    dispatch({ type: "TOGGLE_CART", payload: product });
  };

  const handleProductCount = (type, productId) => {
    dispatch({ type: "UPDATE_COUNT", payload: { type, productId } });
  };

  const handleSort = (sortOption) => {
    dispatch({ type: "SET_SORT", payload: sortOption });
  };

  const sortedProducts =
    sortType === "popular"
      ? allProducts
      : [...allProducts].sort((a, b) => {
          if (sortType === "newest") {
            return new Date(b.date) - new Date(a.date);
          } else if (sortType === "low") {
            return a.price - b.price;
          } else {
            return b.price - a.price;
          }
        });

  return (
    <div className="container mx-auto px-4 md:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ProductHeader handleSort={handleSort} sortType={sortType} />
          <Products
            handleProducts={handleProducts}
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
