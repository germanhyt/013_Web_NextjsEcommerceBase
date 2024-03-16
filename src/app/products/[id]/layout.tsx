import { ProductsProvider } from "@/core/hooks";
import React from "react";

interface IProps {
  children: React.ReactNode;
  params?: any;
}

const layout = ({ children, params }: IProps) => {
  return (
    <ProductsProvider idProduct={Number(params.id)}>
      {children}
    </ProductsProvider>
  );
};

export default layout;
