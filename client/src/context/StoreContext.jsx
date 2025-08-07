/// StooreContext

import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  // const [food_list, setFoodList] = useState([]);
  

 const addToCart = (id) => {
  setCartItems(prev => ({
    ...prev,
    [id]: (prev[id] || 0) + 1
  }));
};


  const removeFromCart = (id) => {
  setCartItems(prev => {
    const updated = { ...prev };
    delete updated[id]; 
    return updated;
  });
};

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
    