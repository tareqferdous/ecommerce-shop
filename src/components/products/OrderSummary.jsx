import PromoCodeInput from "./PromoCodeInput";

const OrderSummary = () => {
  return (
    <div class="mt-6">
      <h3 class="font-bold text-lg mb-4">Order Summary</h3>

      <div class="space-y-2 mb-4">
        <div class="flex justify-between">
          <span class="text-gray-600">Subtotal</span>
          <span class="font-medium">$565</span>
        </div>
        <div class="flex justify-between text-red-500">
          <span>Discount (-20%)</span>
          <span>-$113</span>
        </div>
        <div class="flex justify-between">
          <span class="text-gray-600">Delivery Fee</span>
          <span class="font-medium">$15</span>
        </div>
        <div class="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
          <span>Total</span>
          <span>$467</span>
        </div>
      </div>

      <PromoCodeInput />

      <a
        href="#"
        class="block bg-black text-white text-center py-3 rounded-md hover:bg-gray-800 transition-colors"
      >
        Go to Checkout
        <span class="inline-block ml-2">→</span>
      </a>
    </div>
  );
};

export default OrderSummary;
