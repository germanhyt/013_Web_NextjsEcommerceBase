"use client";

import { ProductsContext } from "@/core/hooks";
import ProductsContextType from "@/app/layouts/domain/ProductsContextType";
import { useContext } from "react";
import { FiClock, FiTag, FiExternalLink } from "react-icons/fi";

const ProductHeader = () => {
  const { products, idProduct } =
    useContext<ProductsContextType>(ProductsContext);

  return products
    .filter((project) => project.id === idProduct)
    .map((p) => (
      <div key={p.id}>
        <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light  mb-7">
          {p.ProductHeader.title}
        </p>
        <div className="flex flex-wrap">
          <div className="flex items-center mr-10">
            <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {p.ProductHeader.publishDate}
            </span>
          </div>
          <div className="flex items-center mr-10">
            <FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {p.ProductHeader.tags}
            </span>
          </div>
          <div className="flex items-center">
            <FiExternalLink className="text-lg text-ternary-dark dark:text-ternary-light" />
            <a
              href={p.ProductHeader.link}
              target="__blank"
              className="font-general-regular hover:underline hover:text-[#0123e7] break-all ml-2 leading-none text-primary-dark dark:text-primary-light"
            >
              Link de Proyecto
            </a>
          </div>
        </div>
      </div>
    ));
};

export default ProductHeader;
