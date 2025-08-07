import React, { useContext, useState } from 'react';
import { StoreContext } from '../context/storeContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  const navigate = useNavigate();

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoError, setPromoError] = useState('');

  const validPromoCodes = {
    SAVE10: 10,   // 10% discount
    SAVE20: 20,   // 20% discount
  };

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
   const discountAmount = (subtotal * discount) / 100;
   const deliveryFee = subtotal > 200 ? 0 : 20;
   const total = subtotal - discountAmount + deliveryFee;


  const applyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (validPromoCodes[code]) {
      setDiscount(validPromoCodes[code]);
      setPromoError('');
    } else {
      setDiscount(0);
      setPromoError('Invalid promo code.');
    }
  };

  return (
    <section className="container max-w-5xl mx-auto mt-8 px-4">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {Object.keys(cartItems).length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            <div className="grid grid-cols-6 font-semibold border-b pb-2">
              <p>Item</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>

            {Object.entries(cartItems).map(([itemId, quantity]) => {
              const item = food_list.find(f => f._id === itemId);
              if (!item) return null;

              return (
                <div key={itemId} className="grid grid-cols-6 items-center border-b py-3">
                  <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-md" />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{quantity}</p>
                  <p>₹{(item.price * quantity).toFixed(2)}</p>
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => removeFromCart(itemId)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-10 bg-gray-50 p-6 rounded-md shadow-sm w-full max-w-md ml-auto">
            <h3 className="text-xl font-bold mb-4">Cart Totals</h3>
            <div className="flex justify-between mb-2">
              <p>Subtotal</p>
              <p>₹{subtotal.toFixed(2)}</p>
            </div>

            {discount > 0 && (
              <div className="flex justify-between mb-2 text-green-600">
                <p>Discount ({discount}%)</p>
                <p>-₹{discountAmount.toFixed(2)}</p>
              </div>
            )}

            <div className="flex justify-between mb-2">
              <p>Delivery Fee</p>
              <p>₹{deliveryFee}</p>
            </div>

            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <p>Total</p>
              <p>₹{total.toFixed(2)}</p>
            </div>

            <button
              className="mt-4 w-full bg-orange-500 hover:bg-orange-600 hover:cursor-pointer text-white py-2 rounded-md transition"
              onClick={() => navigate('/order')}
            >
              PROCEED TO CHECKOUT
            </button>

            <div className="mt-6">
              <p className="text-sm text-gray-600 mb-2">If you have a promo code, enter it here</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-grow px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
                <button
                  onClick={applyPromo}
                  className="px-4 py-2 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-300 hover:cursor-pointer hover:text-black"
                >
                  Apply
                </button>
              </div>
              {promoError && <p className="text-red-500 mt-1 text-sm">{promoError}</p>}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
