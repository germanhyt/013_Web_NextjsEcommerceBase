"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Suspense } from "react";

const about = () => {
  return (
    <AnimatePresence>
      <Suspense fallback={<p>Loading feed...</p>}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            delay: 0.15,
          }}
          className="mt-28"
        >
          <section className=" bg-secondary-dark  ">
            <div className="container  mx-auto text-white py-10 sm:py-16 flex flex-wrap sm:flex-nowrap gap-5r">
              <div className="sm:w-2/3 px-2 sm:px-10">
                <h3 className="font-nunito font-bold">
                  Hola Somos Comercial ...
                </h3>
                <p className="text-white py-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Soluta dignissimos impedit vel debitis numquam error, voluptas
                  culpa reprehenderit, aperiam totam nulla ducimus repudiandae
                  incidunt deleniti porro assumenda quis sapiente quisquam!
                </p>
              </div>
              <div className="sm:w-1/3">
                <Image
                  loader={() => {
                    return "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png";
                  }}
                  src="image.png"
                  alt="Image description"
                  className="sm:w-full rounded-lg"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </section>
          <section className="bg-primary-light ">
            <div className="container mx-auto py-10 sm:py-16 flex flex-wrap flex-col-reverse sm:flex-row sm:flex-nowrap gap-5">
              <div className="sm:w-1/3">
                <Image
                  loader={() => {
                    return "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png";
                  }}
                  src="image.png"
                  alt="Image description"
                  className="sm:w-full rounded-lg"
                  width={300}
                  height={300}
                />
              </div>
              <div className="sm:w-2/3 px-2 sm:px-10">
                <h3 className="font-nunito font-bold text-black ">
                  Hola Somos Comercial ...
                </h3>
                <p className="text-black py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  voluptates sint tenetur, ipsa porro omnis unde possimus quasi
                  aspernatur exercitationem hic sed veniam sequi. Facere atque
                  numquam deserunt nisi cumque.
                </p>
              </div>
            </div>
          </section>
          <section className="bg-secondary-dark ">
            <div className="container mx-auto  py-10 sm:py-16 flex flex-wrap sm:flex-nowrap gap-5">
              <div className="sm:w-2/3 px-2 sm:px-10">
                <h3 className="font-nunito font-bold text-white ">
                  Hola Somos Comercial ...
                </h3>
                <p className="text-white py-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Soluta dignissimos impedit vel debitis numquam error, voluptas
                  culpa reprehenderit, aperiam totam nulla ducimus repudiandae
                  incidunt deleniti porro assumenda quis sapiente quisquam!
                </p>
              </div>
              <div className="sm:w-1/3">
                <Image
                  loader={() => {
                    return "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png";
                  }}
                  src="image.png"
                  alt="Image description"
                  className="sm:w-full rounded-lg"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </section>
        </motion.div>
      </Suspense>
    </AnimatePresence>
  );
};

export default about;
