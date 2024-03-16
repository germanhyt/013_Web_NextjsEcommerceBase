"use client";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense } from "react";

const Contact = () => {
  return (
    <AnimatePresence>
      <Suspense fallback={<p>Loading feed...</p>}>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            delay: 0.1,
          }}
          className="mt-28 py-8 sm:py-16 bg-primary-light dark:bg-secondary-dark"
        >
          <div className="container mx-auto flex flex-col-reverse sm:flex-row">
            <ContactForm />
            <ContactDetails />
          </div>
        </motion.section>
      </Suspense>
    </AnimatePresence>
  );
};

export default Contact;
