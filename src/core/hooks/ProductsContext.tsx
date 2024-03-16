"use client";

import { ReactNode, createContext, useState } from "react";
import { Product, productsData } from "@/assets/data/productsData";

interface ProductsContextType {
  products: Product[];
  searchProduct: string;
  setSearchProduct: React.Dispatch<React.SetStateAction<string>>;
  selectProduct: string;
  setSelectProduct: React.Dispatch<React.SetStateAction<string>>;
  idProduct?: number;
  searchProductByTitle: Product[];
  selectProductsByCategory: Product[];
}

export const ProductsContext = createContext<ProductsContextType>({
  products: [],
  searchProduct: "",
  setSearchProduct: () => {},
  selectProduct: "",
  setSelectProduct: () => {},
  idProduct: 0,
  searchProductByTitle: [],
  selectProductsByCategory: [],
});

interface IProps {
  children?: ReactNode;
  idProduct?: number;
}

const ProductsProvider = (props: IProps) => {
  // Hooks
  const [products] = useState(productsData);
  const [searchProduct, setSearchProduct] = useState<string>("");
  const [selectProduct, setSelectProduct] = useState<string>("");
  const { idProduct } = props;

  // console.log("Productos ", products);

  // Methos
  const searchProductByTitle = products.filter((item) => {
    const result = item.title
      .toLowerCase()
      .includes(searchProduct.toLowerCase())
      ? item
      : searchProduct === ""
      ? item
      : "";
    return result;
  });

  const selectProductsByCategory = products.filter((item) => {
    const category =
      item.category.charAt(0).toUpperCase() + item.category.slice(1);
    return category.includes(selectProduct ?? null);
  });

  return (
    <ProductsContext.Provider
      value={{
        products,
        searchProduct,
        setSearchProduct,
        selectProduct,
        setSelectProduct,
        searchProductByTitle,
        selectProductsByCategory,
        idProduct,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
