import { getImageUrl } from "../../utils/product-utils";
import OrderSummary from "./OrderSummary";

const ProductCart = ({ cartProducts, handleProducts, handleProductCount }) => {
  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>

        {cartProducts.length === 0 ? (
          <p className="text-red-500 font-bold">
            No items in your shopping cart yet
          </p>
        ) : (
          cartProducts.map((product) => (
            <div
              key={product.id}
              className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4"
            >
              <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
                <img
                  src={getImageUrl(product.image)}
                  alt="Gradient Graphic T-shirt"
                  className="h-full w-auto object-cover"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between">
                  <h3 className="font-medium">{product.name}</h3>
                  <span
                    onClick={() => handleProducts(product)}
                    className="text-red-500 text-md cursor-pointer"
                  >
                    ×
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <p className="font-bold">${product.price}</p>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() =>
                        handleProductCount("decrement", product.id)
                      }
                      disabled={product.quantity === 1}
                      className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
                    >
                      −
                    </button>
                    <span className="text-sm">{product.quantity}</span>
                    <button
                      onClick={() =>
                        handleProductCount("increment", product.id)
                      }
                      disabled={product.stock === product.quantity}
                      className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}

        <OrderSummary cartProducts={cartProducts} />
      </div>
    </div>
  );
};

export default ProductCart;
