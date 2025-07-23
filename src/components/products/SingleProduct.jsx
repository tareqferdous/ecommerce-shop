import { getImageUrl } from "../../utils/product-utils";

const SingleProduct = ({ product, handleProducts, cartProducts }) => {
  const isAddedToCart =
    cartProducts.length > 0 &&
    cartProducts.some((item) => item.id === product.id);

  return (
    <div class="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div class="h-48 bg-gray-200 flex items-center justify-center">
        <img
          src={getImageUrl(product.image)}
          alt="Gradient Graphic T-shirt"
          class="h-full w-auto object-cover"
        />
      </div>
      <div class="p-4">
        <h3 class="font-medium">{product.name} </h3>
        <div class="flex items-center justify-between">
          <div class="flex items-center my-1">
            <div class="flex text-yellow-400">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span class="text-gray-300">★</span>
            </div>
            <span class="text-xs text-gray-500 ml-1">4/5</span>
          </div>
          <span class="text-xs text-gray-700">({product.stock} pcs left)</span>
        </div>
        <p class="font-bold">${product.price} </p>
        {isAddedToCart ? (
          <button
            onClick={() => handleProducts(product)}
            class="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center cursor-pointer"
          >
            Remove from Cart
          </button>
        ) : (
          <button
            onClick={() => handleProducts(product)}
            class="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900 cursor-pointer"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
