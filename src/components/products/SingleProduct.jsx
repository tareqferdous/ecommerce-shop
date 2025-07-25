import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { getImageUrl } from "../../utils/product-utils";

const SingleProduct = ({ product, handleProducts }) => {
  const { state } = useContext(ProductContext);
  const { cartProducts } = state;
  const isAddedToCart = cartProducts.find((p) => p.id === product.id);

  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img
          src={getImageUrl(product.image)}
          alt="Gradient Graphic T-shirt"
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{product.name} </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center my-1">
            <div className="flex text-yellow-400">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span className="text-gray-300">★</span>
            </div>
            <span className="text-xs text-gray-500 ml-1">4/5</span>
          </div>
          <span className="text-xs text-gray-700">
            ({product.stock} pcs left)
          </span>
        </div>
        <p className="font-bold">${product.price} </p>
        {isAddedToCart ? (
          <button
            onClick={() => handleProducts(product)}
            className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center cursor-pointer"
          >
            Remove from Cart
          </button>
        ) : (
          <button
            onClick={() => handleProducts(product)}
            className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900 cursor-pointer"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
