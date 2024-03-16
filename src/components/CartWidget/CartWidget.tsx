"use  client";

import { CartContext } from "@/core/hooks/CartContext";
import { Menu, MenuItem } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense, useContext, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { Button } from "react-bootstrap";

const CartWidget = () => {
  const [isClient, setIsClient] = useState<boolean>(false);

  // Hooks
  const { cartProducts, deleteProductToCart } = useContext(CartContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Methods
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const qtyCartProducts = cartProducts.length;

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <>
          <AnimatePresence>
            <Suspense fallback={<p>Loading feed...</p>}>
              <Button
                className="relative ml-8 border-none bg-primary-light text-ternary-dark hover:text-gray-400 dark:bg-ternary-dark dark:text-primary-light p-3 shadow-sm rounded-xl cursor-pointer"
                id="basic-button"
                onClick={handleClick}
              >
                <FaShoppingCart className=" text-xl" />
                <div className="absolute -right-2  px-2 py-0 bg-secondary-dark text-white rounded-full">
                  <span className="text-sm text-center">{qtyCartProducts}</span>
                </div>
              </Button>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  className="menuCart shadow-inner"
                >
                  <p className="font-nunito text-start px-2">
                    Lista de Productos
                  </p>
                  {cartProducts.map((cp) => {
                    return (
                      <MenuItem
                        key={cp.id}
                        onClick={handleClose}
                        className="flex flex-col sm:flex-row gap-2 h-auto w-auto"
                      >
                        <Image
                          loader={() => {
                            return cp.img;
                          }}
                          src="image.png"
                          alt="Image description"
                          className=" rounded-lg"
                          width={120}
                          height={100}
                        />
                        <div className="flex flex-col sm:flex-row items-center justify-center my-2 sm:my-5">
                          <p>{cp.name}</p>
                          <p>s/. {cp.price}</p>
                          <p>Cantidad: {cp.quantity}</p>
                        </div>
                        <Button
                          onClick={() => deleteProductToCart(cp)}
                          className="z-0 w-8 flex justify-center py-1  rounded-md bg-primary-light text-primary-dark  border-2 border-primary-dark hover:text-white hover:bg-primary-dark"
                        >
                          <MdDelete />
                        </Button>
                      </MenuItem>
                    );
                  })}
                  <Link href="/cart">
                    <div className="w-full text-center bg-primary-dark text-white py-1">
                      Concluir compra
                    </div>
                  </Link>
                </Menu>
              </motion.div>
            </Suspense>
          </AnimatePresence>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default CartWidget;
