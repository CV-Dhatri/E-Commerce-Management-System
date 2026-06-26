import { createContext, useState, useEffect } from "react";

import {
  getCart,
  addToCart as addToCartAPI,
  updateCart,
  removeFromCart as removeCartAPI,
} from "../services/cartService";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState(() => {

    const savedCart = localStorage.getItem("cart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];

  });

  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );

  }, [cartItems]);

  useEffect(() => {

    loadCart();

  }, []);

  const loadCart = async () => {

    try {

      const response = await getCart();

      if (response.data) {
        setCartItems(response.data);
      }

    } catch (error) {

      console.log(
        "Cart API not available yet."
      );

    }

  };

  const addToCart = async (product) => {

    try {

      await addToCartAPI({
        productId: product.id,
        quantity: 1,
      });

    } catch (error) {

      console.log(
        "Backend add cart unavailable."
      );

    }

    const existingItem = cartItems.find(
      (item) => item.id === product.id
    );

    if (existingItem) {

      setCartItems(

        cartItems.map((item) =>

          item.id === product.id

            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }

            : item

        )

      );

    } else {

      setCartItems([

        ...cartItems,

        {
          ...product,
          quantity: 1,
        },

      ]);

    }

  };
    const increaseQuantity = async (id) => {

    const item = cartItems.find(
      (i) => i.id === id
    );

    try {

      await updateCart(
        id,
        item.quantity + 1
      );

    } catch (error) {

      console.log(
        "Backend update unavailable."
      );

    }

    setCartItems(

      cartItems.map((item) =>

        item.id === id

          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }

          : item

      )

    );

  };

  const decreaseQuantity = async (id) => {

    const item = cartItems.find(
      (i) => i.id === id
    );

    try {

      await updateCart(
        id,
        item.quantity - 1
      );

    } catch (error) {

      console.log(
        "Backend update unavailable."
      );

    }

    setCartItems(

      cartItems

        .map((item) =>

          item.id === id

            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }

            : item

        )

        .filter(
          (item) => item.quantity > 0
        )

    );

  };

  const removeFromCart = async (
    indexToRemove
  ) => {

    const item =
      cartItems[indexToRemove];

    try {

      await removeCartAPI(item.id);

    } catch (error) {

      console.log(
        "Backend remove unavailable."
      );

    }

    setCartItems(

      cartItems.filter(

        (_, index) =>
          index !== indexToRemove

      )

    );

  };

  const clearCart = () => {

    setCartItems([]);

  };
    return (

    <CartContext.Provider

      value={{

        cartItems,

        addToCart,

        removeFromCart,

        increaseQuantity,

        decreaseQuantity,

        clearCart,

      }}

    >

      {children}

    </CartContext.Provider>

  );

};