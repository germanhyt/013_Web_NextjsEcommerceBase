"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  title: string;
  category: string;
  image: string;
  numberproduct: number;
}

const ProductSingle = ({ title, category, image, numberproduct }: IProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <Link
        // href={`/products/product?id=${numberproduct}`}
        href={`/products/${numberproduct}`}
        aria-label="Single Project"
      >
        <div className="rounded-xl shadow-lg hover:shadow-2xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-primary-dark">
          <div>
            {/* <img
              src={image}
              className="rounded-t-xl border-none w-full object-cover"
              alt="Single Project"
            /> */}
            <Image
              loader={() => {
                return image;
              }}
              src="image.png"
              alt="Image description"
              className="w-full rounded-lg"
              width={300}
              height={300}
            />
          </div>
          <div className="text-center px-4 py-6">
            <p className="break-all font-general-medium text-md sm:text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {title}
            </p>
            <span className="break-all text-sm sm:text-lg text-ternary-dark dark:text-ternary-light">
              {category}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductSingle;
