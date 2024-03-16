"use client";

import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "@/core/hooks";
import ProductsContextType from "@/app/layouts/domain/ProductsContextType";
// import { Slide } from "react-slideshow-image";
import Image from "next/image";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { motion } from "framer-motion";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <GrFormNext />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "100%",
      }}
      onClick={onClick}
    >
      <GrFormPrevious />
    </div>
  );
}

const ProductGallery = () => {
  // Hooks
  const { products, idProduct } =
    useContext<ProductsContextType>(ProductsContext);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isClient, setIsClient] = useState<boolean>(false);


  // Methods
  // const properties = {
  //   prevArrow: (
  //     <button className="w-5 border-0 bg-black text-white rounded-md">
  //       <GrFormPrevious className="size-10 " />
  //     </button>
  //   ),
  //   nextArrow: (
  //     <button className="w-5 border-0 bg-black text-white rounded-md">
  //       <GrFormNext className="size-10 " />
  //     </button>
  //   ),
  // };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {isClient ? (
        <>
          {products
            .filter((product) => product.id === idProduct)
            .map((p) => (
              <div
                key={p.id}
                // className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 py-6"
                className="pt-12 pb-2 sm:mb-0 "
              >
                <Slider {...settings} slidesToShow={slidesToShow}>
                  {p.ProductsImages.map((pp) => {
                    return (
                      <div key={pp.id} className="px-2 ">
                        <Image
                          loader={({ src }) => src}
                          src={pp.img}
                          alt="Image description"
                          className="rounded-lg w-full sm:w-fill"
                          width={300}
                          height={300}
                        />
                      </div>
                    );
                  })}
                </Slider>
              </div>
            ))}
        </>
      ) : (
        <></>
      )}
    </motion.section>
  );
};

export default ProductGallery;
