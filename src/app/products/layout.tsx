"use client";

import { ProductsProvider } from "@/core/hooks";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

const layout = ({ children }: IProps) => {
  return <ProductsProvider>{children}</ProductsProvider>;
};

export default layout;
