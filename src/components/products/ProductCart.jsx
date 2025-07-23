import { getImageUrl } from "../../utils/product-utils";
import OrderSummary from "./OrderSummary";

const ProductCart = ({
  cartProducts,
  handleProducts,
  productQnt,
  setProductQnt,
  handleProductCount,
}) => {
  return (
    <div class="lg:col-span-1">
      <div class="bg-white rounded-lg p-6 border border-gray-200">
        <h2 class="text-2xl font-bold mb-6">YOUR CART</h2>

        {cartProducts.length === 0 ? (
          <p class="text-red-500 font-bold">
            No items in your shopping cart yet
          </p>
        ) : (
          cartProducts.map((product) => (
            <div
              key={product.id}
              class="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4"
            >
              <div class="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
                <img
                  src={getImageUrl(product.image)}
                  alt="Gradient Graphic T-shirt"
                  class="h-full w-auto object-cover"
                />
              </div>
              <div class="flex-grow">
                <div class="flex justify-between">
                  <h3 class="font-medium">{product.name}</h3>
                  <span
                    onClick={() => handleProducts(product)}
                    class="text-red-500 text-md cursor-pointer"
                  >
                    ×
                  </span>
                </div>
                <div class="flex justify-between items-center mt-2">
                  <p class="font-bold">${product.price}</p>
                  <div class="flex items-center space-x-2">
                    <button
                      onClick={() =>
                        handleProductCount("decrement", product.id)
                      }
                      disabled={product.quantity === 1}
                      class="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
                    >
                      −
                    </button>
                    <span class="text-sm">{product.quantity}</span>
                    <button
                      onClick={() =>
                        handleProductCount("increment", product.id)
                      }
                      disabled={product.stock === product.quantity}
                      class="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}

        <OrderSummary />
      </div>
    </div>
  );
};

export default ProductCart;
