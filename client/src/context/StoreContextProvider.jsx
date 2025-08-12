import { useEffect, useState } from "react";
import axios from "axios";
import { StoreContext } from "./StoreContext";

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [foodList, setFoodList] = useState([]);
  const [loading, setLoading] = useState(true);

  // NEW STATES
  const [discount, setDiscount] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  const [promoError, setPromoError] = useState("");

  const validPromoCodes = {
    SAVE10: 10,
    SAVE20: 20,
  };

  const backendUrl = "http://10.209.126.144:4000/api"; 
  const token = localStorage.getItem("token");

  const fetchFoodList = async () => {
    try {
      const res = await axios.get(`${backendUrl}/food/list`);
      if (res.data.success) setFoodList(res.data.data);
    } catch (err) {
      console.error("Error fetching food list:", err);
    }
  };

  const fetchCart = async () => {
    if (!token) return;
    try {
      const res = await axios.post(
        `${backendUrl}/cart/get`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.data.success) setCartItems(res.data.cartData || {});
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };

  const addToCart = async (id) => {
    try {
      if (token) {
        await axios.post(
          `${backendUrl}/cart/add`,
          { itemId: id },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }
      setCartItems((prev) => ({
        ...prev,
        [id]: (prev[id] || 0) + 1,
      }));
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };

  const removeFromCart = async (id) => {
    try {
      if (token) {
        await axios.post(
          `${backendUrl}/cart/remove`,
          { itemId: id },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }
      setCartItems((prev) => {
        const updated = { ...prev };
        if (updated[id] > 1) updated[id] -= 1;
        else delete updated[id];
        return updated;
      });
    } catch (err) {
      console.error("Error removing from cart:", err);
    }
  };

  // Apply promo code (shared for both Cart & PlaceOrder)
  const applyPromo = (code) => {
    const formatted = code.trim().toUpperCase();
    if (validPromoCodes[formatted]) {
      setPromoCode(formatted);
      setDiscount(validPromoCodes[formatted]);
      setPromoError("");
    } else {
      setPromoCode("");
      setDiscount(0);
      setPromoError("Invalid promo code.");
    }
  };

  useEffect(() => {
    (async () => {
      await fetchFoodList();
      await fetchCart();
      setLoading(false);
    })();
  }, []);

  return (
    <StoreContext.Provider 
      value={{ 
        foodList, cartItems, addToCart, removeFromCart, loading,
        discount, promoCode, promoError, applyPromo, setPromoCode
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
