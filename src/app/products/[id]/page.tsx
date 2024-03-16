"use client";
import ProductGallery from "@/components/products/ProductGallery";
import ProductHeader from "@/components/products/ProductHeader";
import ProductInfo from "@/components/products/ProductInfo";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense } from "react";

const Product = () => {
  // const searchParams = useSearchParams();
  // const id = searchParams.get("id");
  // console.log("idProduct ", params);

  return (
    <AnimatePresence>
      <Suspense fallback={<p>Loading feed...</p>}>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            delay: 0.15,
          }}
          className="w-[100vw] bg-primary-light dark:bg-secondary-dark mt-28"
        >
          <div className=" container mx-auto py-8 sm:py-16">
            <ProductHeader />
            <ProductGallery />
            <ProductInfo />
          </div>
        </motion.section>
      </Suspense>
    </AnimatePresence>
  );
};

export default Product;
