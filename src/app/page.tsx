"use client";

import ProductsGrid from "@/components/products/ProductsGrid";
import { BannerSlider } from "@/components/shared";
import { Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";

const Home = () => {
  return (
    <AnimatePresence>
      <Suspense fallback={<p>Loading feed...</p>}>
        <div className="">
          {/* Carousel de Imagenes */}
          <BannerSlider />
          {/* Grilla de Productos */}
          <ProductsGrid page={"Home"} />

          <div className="mb-16 flex justify-center ">
            <Link href="/products" aria-label="More Projects">
              <button
                className="text-md font-general-medium bg-[#E60000] hover:bg-red-600 text-white shadow-sm rounded-md px-5 py-2 duration-300"
                title={"Más Productos"}
                onClick={() => {}}
                aria-label="Contact Button"
              >
                Más Productos
              </button>
            </Link>
          </div>
        </div>
      </Suspense>
    </AnimatePresence>
  );
};

export default Home;
