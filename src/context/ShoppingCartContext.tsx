import React, { createContext, useState, useContext } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import useLocaleStorage from "../hooks/useLocaleStorage";

type ShoppingCartProviderProps = {
  children: React.ReactNode;
};

type ItemsType = {
  id: number;
  quantity: number;
};

type ShoppingCartContextType = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  items: ItemsType[];
  cartQuantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export const useShoppingCart = ()=> {
  return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
  const [items, setItems] = useLocaleStorage<ItemsType[]>('ts-shopping-cart',[]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  const getItemQuantity = (id: number) => {
    return items.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id: number) => {
    if (items.find((item) => item.id === id)) {
      setItems((prev) =>
        prev.map((e) => (e.id === id ? { ...e, quantity: e.quantity + 1 } : e))
      );
    } else {
      setItems((prev) => [...prev, { id, quantity: 1 }]);
    }
  };

  const decreaseCartQuantity = (id: number) => {
    if (items.find((item) => item.id === id)?.quantity !== 1) {
      setItems((prev) =>
        prev.map((e) => (e.id === id ? { ...e, quantity: e.quantity - 1 } : e))
      );
    } else {
      setItems((prev) => prev.filter((e) => e.id !== id));
    }
  };

  const removeFromCart = (id: number) => {
    setItems((prev) => prev.filter((e) => e.id !== id));
  };

  const cartQuantity = items.reduce((prev, item) => item.quantity + prev, 0)

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        items,
        cartQuantity,
        openCart,
        closeCart
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen}/>
    </ShoppingCartContext.Provider>
  );
};
