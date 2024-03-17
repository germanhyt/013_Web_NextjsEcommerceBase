"use client";

import { useContext } from "react";
import { ProductsContext } from "@/core/hooks";
import { FiSearch } from "react-icons/fi";
import ProductsFilter from "./ProductsFilter";
import ProductSingle from "./ProductSingle";
import { Product } from "@/assets/data/productsData";
import { motion } from "framer-motion";
import ProductsContextType from "@/app/layouts/domain/ProductsContextType";

interface IProps {
  page: string;
}

const ProductsGrid = ({ page }: IProps) => {
  const {
    products,
    searchProduct,
    setSearchProduct,
    selectProduct,
    setSelectProduct,
    searchProductByTitle,
    selectProductsByCategory,
  } = useContext<ProductsContextType>(ProductsContext);

  // console.log("Productos ", products);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-8 sm:py-12 dark:bg-secondary-dark bg-primary-light"
    >
      <div className="container mx-auto">
        <div className="text-center">
          <p className="font-nunito text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
            Productos
          </p>
        </div>

        <div className="mt-10 sm:mt-12">
          <h3
            className="font-nunito 
              text-center text-secondary-dark
              dark:text-ternary-light
              text-md
              sm:text-xl
              mb-10
              "
          >
            Buscar producto por título o fltrar por categoría
          </h3>
          <div
            className="
              flex
              flex-col
              sm:flex-row						
              justify-between
              border-b border-primary-light
              dark:border-secondary-dark
              pb-3
              gap-3
              "
          >
            <div className="flex justify-between gap-2">
              <span
                className="
                      hidden
                      sm:block
                      bg-secondary-light
                      dark:bg-primary-dark
                      p-2.5
                      shadow-sm
                      rounded-xl
                      cursor-pointer
                      "
              >
                <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
              </span>
              <input
                onChange={(e) => {
                  setSearchProduct(e.target.value);
                }}
                className="font-nunito
                      pl-3
                      pr-1
                      sm:px-4
                      py-2
                      border 
                      border-gray-200
                      dark:border-secondary-dark
                      rounded-lg
                      text-sm
                      sm:text-md
                      bg-secondary-light
                      dark:bg-primary-dark
                      text-ternary-dark
                      dark:text-primary-light
                      w-full
                      sm:w-fit
                      "
                id="name"
                name="name"
                type="search"
                placeholder="Buscar Proyectos"
                aria-label="Name"
              />
            </div>

            <ProductsFilter setSelectProject={setSelectProduct} />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-6 gap-2 sm:gap-10">
          {selectProduct
            ? selectProductsByCategory.map((product: Product) => (
                <ProductSingle
                  title={product.title}
                  category={product.category}
                  image={product.img}
                  numberproduct={product.id}
                  key={product.id}
                />
              ))
            : searchProduct
            ? searchProductByTitle.map((product: Product) => (
                <ProductSingle
                  title={product.title}
                  category={product.category}
                  image={product.img}
                  numberproduct={product.id}
                  key={product.id}
                />
              ))
            : page === "home"
            ? products
                .filter((_p, index) => index < 6)
                .map((product: Product) => (
                  <ProductSingle
                    title={product.title}
                    category={product.category}
                    image={product.img}
                    numberproduct={product.id}
                    key={product.id}
                  />
                ))
            : products.map((product: Product) => (
                <ProductSingle
                  title={product.title}
                  category={product.category}
                  image={product.img}
                  numberproduct={product.id}
                  key={product.id}
                />
              ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProductsGrid;
