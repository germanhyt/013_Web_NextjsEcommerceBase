"use client";
import { ReactNode, createContext, useState } from "react";

interface CartProduct {
  id: number;
  name: string;
  quantity: number;
  price: number;
  img: string;
}

interface CartProductsContextType {
  cartProducts: CartProduct[];
  addProductToCart: (product: CartProduct, quantity: number) => void;
  deleteProductToCart: (product: CartProduct) => void;
  calculateTotal: () => number;
  setCartProducts: React.Dispatch<React.SetStateAction<CartProduct[]>>;
  reloadStore: (id: number) => void;
}

interface IProps {
  children?: ReactNode;
}

export const CartContext = createContext<CartProductsContextType>({
  cartProducts: [],
  addProductToCart: () => {},
  deleteProductToCart: () => {},
  calculateTotal: () => 0,
  setCartProducts: () => {},
  reloadStore: () => {},
});

const CartProvider = (props: IProps) => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>(
    JSON.parse(
      typeof window !== "undefined"
        ? (window.localStorage.getItem("products") as string)
        : "[]"
    ) || []
  );

  console.log("cartProducts", cartProducts);

  const reloadStore = (id: number) => {
    localStorage.setItem("products", JSON.stringify(id));
  };

  const addProductToCart = (product: CartProduct, quantity: number) => {
    const existingProductIndex = cartProducts.findIndex(
      (cp) => cp.id === product.id
    );

    if (existingProductIndex !== -1) {
      const updatedProducts = [...cartProducts];
      updatedProducts[existingProductIndex].quantity += quantity;
      setCartProducts(updatedProducts);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
    } else {
      setCartProducts([...cartProducts, { ...product, quantity }]);
      localStorage.setItem(
        "products",
        JSON.stringify([...cartProducts, { ...product, quantity }])
      );
    }
  };

  const deleteProductToCart = (product: CartProduct) => {
    setCartProducts(
      cartProducts.filter((cp: CartProduct) => {
        product.quantity = 0;
        localStorage.removeItem("products");
        return cp.id !== product.id;
      })
    );
  };

  const calculateTotal = () => {
    let total = 0;
    cartProducts.map((cp: CartProduct) => {
      total = cp.price * cp.quantity + total;
    });
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addProductToCart,
        deleteProductToCart,
        calculateTotal,
        setCartProducts,
        reloadStore,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
