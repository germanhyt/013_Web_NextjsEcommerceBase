"use client";

import { motion } from "framer-motion";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { bannerSliderImages } from "@/assets/data/bannerData";

const BannerSlider = () => {
  // const buttonStyle = {
  //   width: "30px",
  //   border: "0px",
  // };

  const properties = {
    prevArrow: (
      <button className="text-black bg-white rounded-lg hover:scale-[0.95] border-2 border-primary-dark">
        <GrFormPrevious className="size-10" />
      </button>
    ),
    nextArrow: (
      <button className=" text-black bg-white rounded-lg hover:scale-[0.95] border-2 border-primary-dark">
        <GrFormNext className="size-10" />
      </button>
    ),
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative"
    >
      <div className="w-[100vw] pt-28">
        <Slide {...properties}>
          {bannerSliderImages.map((e) => {
            return (
              <div key={e.id} className="bg-cover overflow-hidden relative">
                {e.show_title_middle ? (
                  <div className="absolute top-0 w-full h-full flex justify-center items-center">
                    <h2 className="z-50 text-white text-xs sm:text-[32px] text-center font-nunito font-bold">
                      {e.title_middle}
                    </h2>
                  </div>
                ) : (
                  <>
                    <div className="absolute top-0 right-0 h-full">
                      <div className="bg-[#990000] dark:bg-black w-[150px] sm:w-[400px] h-full px-5 bg-triangle flex items-center justify-center text-xs sm:text-lg">
                        <p className="mx-auto text-center text-white font-nunito font-bold">
                          {e.title_right}
                        </p>
                      </div>
                    </div>
                  </>
                )}
                {/* <img className="w-full" src={`${e.img}`} alt="img" /> */}

                <Image
                  loader={({ src }) => src}
                  src={e.img}
                  alt="Image description"
                  className="w-full rounded-lg bg-cover"
                  width={300}
                  height={300}
                />
              </div>
            );
          })}
        </Slide>
      </div>
    </motion.section>
  );
};

export default BannerSlider;
