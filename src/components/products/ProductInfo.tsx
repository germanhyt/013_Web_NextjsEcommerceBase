"use client";

import { ProductsContext } from "@/core/hooks";
import { CartContext } from "@/core/hooks/CartContext";
import ProductsContextType from "@/app/layouts/domain/ProductsContextType";
import { useContext, useState } from "react";
import { Button } from "react-bootstrap";

const ProductInfo = () => {
  const { products, idProduct } =
    useContext<ProductsContextType>(ProductsContext);
  console.log("idProduct 2", idProduct);

  const { addProductToCart } = useContext(CartContext);
  const [qty, setQty] = useState<number>(1);

  const clickAdd = () => {
    setQty(qty + 1);
  };

  const clickLess = () => {
    qty > 0 ? setQty(qty - 1) : setQty(0);
  };

  return products
    .filter((product) => product.id === idProduct)
    .map((p) => (
      <div key={p.id} className="block sm:flex gap-0 sm:gap-10 mt-12">
        <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
            {p.ProductsInfo.DescriptionDetailsHeading}
          </p>
          {p.ProductsInfo.DescriptionDetails.map((details) => {
            return (
              <p
                key={details.id}
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
                {details.details}
              </p>
            );
          })}
        </div>

        <div className="w-full sm:w-1/3 text-left">
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
              {p.ProductsInfo.ProductHeading}
            </p>
            <ul className="leading-loose">
              {p.ProductsInfo.ProductDetails.map((info) => {
                return (
                  <li
                    key={info.id}
                    className="font-general-regular text-ternary-dark dark:text-ternary-light"
                  >
                    <span>{info.title}: </span>
                    <a
                      href="https://portfolio-web-ghyt.netlify.app/"
                      className={
                        info.title === "Website" || info.title === "Phone"
                          ? "hover:underline hover:text-primary-dark dark:hover:text-white cursor-pointer duration-300"
                          : ""
                      }
                      aria-label="Product Website and Phone"
                    >
                      {info.details}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap sm:flex-row items-center justify-center gap-2">
              <Button
                className="z-0 w-8 py-1 rounded-md bg-primary-light text-primary-dark  border-2 border-primary-dark hover:text-white hover:bg-primary-dark"
                onClick={() => {
                  clickLess();
                }}
              >
                -
              </Button>
              <p>Cantidad: {qty}</p>
              <Button
                className="z-0 w-8  py-1 rounded-md bg-primary-light text-primary-dark  border-2 border-primary-dark hover:text-white hover:bg-primary-dark"
                onClick={() => {
                  clickAdd();
                }}
              >
                +
              </Button>
            </div>
            <div className="flex justify-center items-center">
              <Button
                className="w-full py-1 bg-primary-dark hover:bg-secondary-dark dark:hover:bg-primary-light text-white rounded-sm dark:hover:text-primary-dark dark:hover:border-2 dark:hover:border-primary-dark "
                onClick={() => {
                  const prod = {
                    id: p.id,
                    name: p.title,
                    quantity: 12,
                    price: 15,
                    img: p.img,
                  };
                  addProductToCart(prod, qty);
                }}
              >
                Agregar
              </Button>
            </div>
          </div>
        </div>
      </div>
    ));
};

export default ProductInfo;
