"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollY, [0, 500], [0, 300]);

  return (
    <div>
      <section
        ref={ref}
        className="relative h-[70vh] flex items-center justify-center overflow-hidden mx-4 rounded-2xl"
      >
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1673645652590-9d21295bf4ac?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10 " />
        {/* Hero */}
        <div className="relative z-20 text-center px-6 w-[850px]">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Professional Roofing & Siding Services
          </h1>
          <p className="mt-6 text-md lg:text-lg text-gray-200 max-w-2xl mx-auto ">
            Protect your home with reliable roofing and siding solutions. Our
            licensed team provides roof repairs, replacements, and siding
            installation.
          </p>
        </div>
      </section>
      <section>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-1 md:grid-cols-2 my-[10vh] ">
            <div>
              <h2 className="text-3xl font-bold  ">
                Top notch roofing services, <br /> trusted by many in CT
              </h2>
            </div>
            <div className="pt-3 lg:pt-0">
              <p className="">
                Our certified roofing contractors provide comprehensive roof
                repair, roof replacement, and roof inspection services. Whether
                you need emergency roof repair or a complete roof replacement,
                our experienced roofing team delivers quality workmanship that
                protects your home for years to come.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
