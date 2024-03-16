"use client";

import ProductsGrid from "@/components/products/ProductsGrid";
import { BannerSlider } from "@/components/shared";
import { Suspense } from "react";
import { AnimatePresence } from "framer-motion";

const Home = () => {
  return (
    <AnimatePresence>
      <Suspense fallback={<p>Loading feed...</p>}>
        <div className="">
          {/* Carousel de Imagenes */}
          <BannerSlider />
          {/* Grilla de Productos */}
          <ProductsGrid page={"Home"} />
        </div>
      </Suspense>
    </AnimatePresence>
  );
};

export default Home;
