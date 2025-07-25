import PromoCodeInput from "./PromoCodeInput";

const OrderSummary = ({ cartProducts }) => {
  const subtotal = cartProducts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2;
  const deliveryFee = cartProducts.length * 5;
  const total = subtotal - discount + deliveryFee;
  return (
    <div className="mt-6">
      <h3 className="font-bold text-lg mb-4">Order Summary</h3>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">${subtotal}</span>
        </div>
        <div className="flex justify-between text-red-500">
          <span>Discount (-20%)</span>
          <span>-${discount}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Delivery Fee</span>
          <span className="font-medium">${deliveryFee}</span>
        </div>
        <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>

      <PromoCodeInput />

      <a
        href="#"
        className="block bg-black text-white text-center py-3 rounded-md hover:bg-gray-800 transition-colors"
      >
        Go to Checkout
        <span className="inline-block ml-2">→</span>
      </a>
    </div>
  );
};

export default OrderSummary;
