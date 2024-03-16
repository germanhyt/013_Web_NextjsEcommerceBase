"use client";

import ProductsGrid from "@/components/products/ProductsGrid";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense } from "react";

const Products = () => {
  return (
    <AnimatePresence>
      <Suspense fallback={<p>Loading feed...</p>}>
        <motion.div className="bg-primary-light dark:bg-secondary-dark mt-28">
          <ProductsGrid page="products" />
        </motion.div>
      </Suspense>
    </AnimatePresence>
  );
};

export default Products;
