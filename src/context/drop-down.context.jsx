/* eslint-disable no-unused-expressions */
import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  // find if cart items contains productToAdd
  const existProduct = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // If found, Increase quantity
  if (existProduct) {
    return cartItems.map((cartItem) =>
      // 1) find the item that's being clicked in the cart

      cartItem.id === productToAdd.id
        ? // 2) destructure the object to make a shallow clone except of the values that we want to change in the object

          { ...cartItem, quantity: cartItem.quantity + 1 }
        : // 3) If no match, then simply return cartItem object (No operation on the object)
          cartItem
    );
  }

  // return new array with modified cartItems/ new cart Item

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const DropDownContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const DropDownProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (accumulator, cartItem) => accumulator + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
  };

  return (
    <DropDownContext.Provider value={value}>
      {children}
    </DropDownContext.Provider>
  );
};

// const addCartItem = (cartItems, productToAdd) => {
//   // find if cart items contains productToAdd

//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === productToAdd.id
//   );

//   // If found, Increase quantity

//   if (existingCartItem) {
//     return cartItems.map((cartItem) =>
//       cartItem.id === productToAdd.id
//         ? { ...cartItems, quantity: cartItem.quantity++ }
//         : cartItem
//     );
//   }

//   // return new array with modified cartItems/ new cart Item
//   return [...cartItems, { ...productToAdd, quantity: 1 }];
// };
