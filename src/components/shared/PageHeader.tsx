"use client";

import { FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useThemeSwitcher } from "@/core/hooks";
import CartWidget from "../CartWidget/CartWidget";
import Image from "next/image";

const PageHeader = () => {
  // Hooks
  const { activeTheme, setTheme } = useThemeSwitcher();
  const [isScrolled, setIsScrolled] = useState(false);

  // Methods
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <header className="z-50 relative flex flex-col flex-wrap overflow-x-hidden">
      <motion.nav
        id="nav"
        className="w-full fixed top-0 right-0 left-0 backdrop-filter"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          backgroundColor: isScrolled ? "rgba(128, 128, 128, 0.1)" : "",
          backdropFilter: isScrolled ? "blur(10px)" : "",
          zIndex: 10,
        }}
      >
        <div className="sm:mx-auto top-0 right-0 left-0 z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
          <div className="flex justify-between items-center px-4 sm:px-0">
            <div className="">
              <Link href="/">
                {activeTheme !== "dark" ? (
                  <Image
                    loader={() => {
                      return "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710111058/Ecommerce-frontend/logo-dark_r0lplu.svg";
                    }}
                    src="image.png"
                    alt="Image description"
                    className="w-14"
                    width={300}
                    height={300}
                  />
                ) : (
                  <Image
                    loader={() => {
                      return "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710110417/Ecommerce-frontend/logo-dark_uhlfmo.png";
                    }}
                    src="image.png"
                    alt="Image description"
                    className="w-14"
                    width={300}
                    height={300}
                  />
                )}
              </Link>
            </div>
          </div>

          <div className="font-nunito hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
            <Link
              href="/"
              className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
              aria-label="Home"
            >
              Inicio
            </Link>
            <Link
              href="/products"
              className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
              aria-label="Projects"
            >
              Productos
            </Link>
            <Link
              href="/about"
              className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
              aria-label="About Me"
            >
              Sobre Nosotros
            </Link>
            <Link
              href="/contact"
              className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
              aria-label="Contact"
            >
              Contacto
            </Link>
          </div>

          <div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
            <div className="hidden md:flex">
              <button
                className="text-md font-general-medium bg-[#E60000] hover:bg-red-600 text-white shadow-sm rounded-md px-5 py-2 duration-300"
                title={"Click aqui"}
                onClick={() => {}}
                aria-label="Contact Button"
              >
                Contáctame
              </button>
            </div>

            <div
              className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
              onClick={() => {
                setTheme(activeTheme);
              }}
              aria-label="Theme Switcher"
            >
              {activeTheme === "dark" ? (
                <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
              ) : (
                <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
              )}
            </div>
            <CartWidget />
          </div>
        </div>
      </motion.nav>
    </header>
  );
};

export default PageHeader;
