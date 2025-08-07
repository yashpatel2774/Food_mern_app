import React, { useContext } from 'react';
import { StoreContext } from '../context/storeContext';

const PlaceOrder = () => {
  const { cartItems, food_list } = useContext(StoreContext);

  const getTotal = () => {
    let total = 0;
    for (const itemId in cartItems) {
      const item = food_list.find(f => f._id === itemId);
      if (item) {
        total += item.price * cartItems[itemId];
      }
    }
    return total;
  };

  const subtotal = getTotal();
  const deliveryFee = subtotal > 200 ? 0 : 20;
  const total = subtotal + deliveryFee;

  return (
    <section className="container max-w-6xl mx-auto mt-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left: Delivery Form */}
        <form className="bg-white p-6 rounded-xl shadow-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Delivery Information</h2>

          <div className="flex gap-4 mb-4">
            <input type="text" placeholder="First name" className="w-1/2 border border-gray-300 rounded-lg p-2" />
            <input type="text" placeholder="Last name" className="w-1/2 border border-gray-300 rounded-lg p-2" />
          </div>

          <div className="mb-4">
            <input type="email" placeholder="Email Address" className="w-full border border-gray-300 rounded-lg p-2" />
          </div>

          <div className="mb-4">
            <input type="text" placeholder="Street" className="w-full border border-gray-300 rounded-lg p-2" />
          </div>

          <div className="flex gap-4 mb-4">
            <input type="text" placeholder="City" className="w-1/2 border border-gray-300 rounded-lg p-2" />
            <input type="text" placeholder="State" className="w-1/2 border border-gray-300 rounded-lg p-2" />
          </div>

          <div className="flex gap-4 mb-4">
            <input type="text" placeholder="Zip Code" className="w-1/2 border border-gray-300 rounded-lg p-2" />
            <input type="text" placeholder="Country" className="w-1/2 border border-gray-300 rounded-lg p-2" />
          </div>

          <div className="mb-6">
            <input type="text" placeholder="Phone" className="w-full border border-gray-300 rounded-lg p-2" />
          </div>
        </form>

        {/* Right: Cart Totals */}
        <div className="bg-white p-6 rounded-xl shadow-md w-full">
          <h2 className="text-2xl font-bold mb-4">Cart Totals</h2>

          <div className="flex justify-between border-b border-gray-200 py-2">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between border-b border-gray-200 py-2">
            <span>Delivery Fee</span>
            <span>₹{deliveryFee.toFixed(2)}</span>
          </div>

          <div className="flex justify-between font-semibold py-2">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>

          <button className="mt-6 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-200">
            Proceed to Payment
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlaceOrder;
