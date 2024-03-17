"use client";

import ProductsGrid from "@/components/products/ProductsGrid";
import { BannerSlider } from "@/components/shared";
import { Suspense, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";

const Home = () => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <AnimatePresence>
          <Suspense fallback={<p>Loading feed...</p>}>
            <div className="">
              {/* Carousel de Imagenes */}
              <BannerSlider />
              {/* Grilla de Productos */}
              <ProductsGrid page={"Home"} />

              <div className="pb-12 flex justify-center bg-primary-light dark:bg-secondary-dark">
                <Link href="/products" aria-label="More Projects">
                  <button
                    className="text-md font-nunito bg-primary-dark hover:border-2 hover:border-primary-dark hover:bg-secondary-dark text-white shadow-sm rounded-md px-5 py-2 duration-200"
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
      ) : null}
    </>
  );
};

export default Home;
