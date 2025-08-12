// // src/pages/Payment.jsx
// import React, { useContext } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { StoreContext } from "../context/storeContext";

// const stripePromise = loadStripe("YOUR_STRIPE_PUBLISHABLE_KEY"); // Replace with your publishable key

// const Payment = () => {
//   const { cartItems, food_list } = useContext(StoreContext);

//   const handleCheckout = async () => {
//     const stripe = await stripePromise;

//     // Prepare cart items
//     const items = Object.entries(cartItems)
//       .filter(([_, qty]) => qty > 0)
//       .map(([id, qty]) => {
//         const product = food_list.find(f => f._id === id);
//         return {
//           name: product.name,
//           price: product.price,
//           quantity: qty,
//         };
//       });

//     // Call backend to create Stripe checkout session
//     const res = await fetch("http://localhost:5000/create-checkout-session", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ items }),
//     });

//     const session = await res.json();

//     // Redirect to Stripe Checkout page
//     const result = await stripe.redirectToCheckout({
//       sessionId: session.id,
//     });

//     if (result.error) {
//       console.error(result.error.message);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <button
//         onClick={handleCheckout}
//         className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-lg shadow-md transition duration-300"
//       >
//         Proceed to Payment
//       </button>
//     </div>
//   );
// };

// export default Payment;
