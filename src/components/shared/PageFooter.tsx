"use client";

import { footerData } from "@/assets/data";
import { motion } from "framer-motion";
import Link from "next/link";

const PageFooter = () => {
  return (
    <div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-black "
      >
        <div className="container mx-auto py-10 flex flex-col gap-6">
          <span className="text-white text-xl sm:text-2xl font-nunito">
            Información Adicional...
          </span>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4 text-white">
              <div className="flex flex-col gap-2">
                <p className="font-nunito font-bold">Categorías</p>
                <ul className="flex flex-col gap-3">
                  {footerData.categories.map((e) => {
                    return (
                      <div key={e.id}>
                        <li className="ml-4 list-disc">
                          <Link
                            className="font-nunito text-white hover:p-1 hover:rounded-xl hover:text-white hover:bg-[#990000]"
                            href={e.url}
                          >
                            {e.name}
                          </Link>
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-nunito font-bold">Contacto</p>
                <ul className="flex flex-col gap-3">
                  {footerData.contacts.map((e) => {
                    return (
                      <div key={e.id}>
                        <li className="ml-4 list-disc">
                          <Link
                            className="font-nunito text-white hover:p-1 hover:rounded-xl hover:text-white hover:bg-[#990000]"
                            href={e.url}
                          >
                            {e.name}
                          </Link>
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-nunito font-bold">Direccción</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d999121.2586122879!2d-77.4811123875!3d-11.987132399999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105e9f363314a97%3A0xa80a046660daae68!2sMercado%20Chacra%20Market%20(Nuevo)!5e0!3m2!1ses!2spe!4v1710030733138!5m2!1ses!2spe"
                  height="250"
                  className="border-0 rounded-xl"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default PageFooter;
