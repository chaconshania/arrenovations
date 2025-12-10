"use client";

import Grid from "@/components/grid";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const servicesRef = useRef(null);
  const whyUsRef = useRef(null);

  const { scrollYProgress: servicesProgress } = useScroll({
    target: servicesRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: whyUsProgress } = useScroll({
    target: whyUsRef,
    offset: ["start end", "end start"]
  });

  const servicesFillLine1 = useTransform(servicesProgress, [0.1, 0.6], ["0%", "100%"]);
  const servicesFillLine2 = useTransform(servicesProgress, [0.3, 0.8], ["0%", "100%"]);
  const whyUsFillLine1 = useTransform(whyUsProgress, [0.1, 0.6], ["0%", "100%"]);
  const whyUsFillLine2 = useTransform(whyUsProgress, [0.3, 0.8], ["0%", "100%"]);

  return (
    <div className="mx-4 space-y-10">
      <section
        className="relative h-[80vh] flex items-end justify-start overflow-hidden rounded-2xl"
      >
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/hero/cover_image.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 py-8 md:px-4 lg:px-2 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8 items-end">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
             CT Homes Deserve Better. <br /> We Build Them<span className="text-[#FF6900]"> That Way.</span>
            </h1>
            <p className="text-md lg:text-lg text-gray-200">
              Expert roofing, gutters, and exterior renovations from a local crew that treats your home like our own.
            </p>
          </div>
        </div>
      </section>
      <section>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 ">
            <div>
              <h2 className="text-md text-[#FF6900] font-bold  ">
                SERVICES
              </h2>
              <h2 ref={servicesRef} className="text-4xl font-bold pt-2 leading-tight">
                <motion.span
                  className="block"
                  style={{
                    backgroundImage: useTransform(
                      servicesFillLine1,
                      (value) => `linear-gradient(to right, #000000 ${value}, #D1D5DB ${value})`
                    ),
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  Top notch roofing services,
                </motion.span>
                <motion.span
                  className="block"
                  style={{
                    backgroundImage: useTransform(
                      servicesFillLine2,
                      (value) => `linear-gradient(to right, #000000 ${value}, #D1D5DB ${value})`
                    ),
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  trusted by many in CT
                </motion.span>
              </h2>
            </div>
            <div className="pt-3 lg:pt-0">
              <p className="text-md pt-0 md:pt-10">
               For over a decade, A&R Renovations has been the trusted name for roof repair, gutter installation, siding, and emergency fixes across Connecticut. We&apos;re not the biggest company out there—and that&apos;s exactly how our customers like it. <br /> <br />
              Every project gets our full attention, from the first call to the final cleanup. Whether you&apos;re dealing with storm damage, planning a full exterior refresh, or just need gutters that actually work, we show up on time, do it right, and stand behind our work.
              </p>
            </div>
          </div>
          
        </motion.div>
     
      </section>
      <section>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2">
          <Card 
            imageUrl="https://images.unsplash.com/photo-1632759145351-1d592919f522?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
            title="Roofing Services"
            description="Whether it&apos;s a small leak or a full replacement, we handle every roofing project with the same care and expertise. Quality materials, clean work sites, and warranties you can count on."
            link="/roofing"
          />
          <Card 
            imageUrl="https://images.unsplash.com/photo-1569898773055-2f2b6e97e1ed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1035"
            title="Gutter Installation"
            description="Seamless gutters designed to protect your foundation, siding, and landscaping. Stop worrying about clogs, leaks, and water damage."
            link="/gutters"
          />
          <Card 
            imageUrl="https://images.unsplash.com/photo-1612451850869-87c3c039c72e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=985"
            title="Siding Services"
            description="Transform your home&apos;s curb appeal and energy efficiency with new siding. We work with vinyl, fiber cement, and wood—installed to last."
            link="/renovations"
          />
           <Card 
            imageUrl="https://images.unsplash.com/photo-1673645652590-9d21295bf4ac?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="24/7 Emergency Repairs"
            description="When disaster strikes, we respond fast. Emergency tarping, leak repairs, and insurance claim support when you need it most."
            link="/roofing"
          />
          <Card 
            imageUrl="https://images.unsplash.com/photo-1673645652590-9d21295bf4ac?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Gutter Installation"
            description="Professional gutter systems"
            link="/gutters"
          />
          <Card 
            imageUrl="https://images.unsplash.com/photo-1673645652590-9d21295bf4ac?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Exterior Renovations"
            description="Complete home exterior makeovers"
            link="/renovations"
          />
        </div>
        </section>
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-md text-[#FF6900] font-bold  ">
               WHY US?
          </h2>
          <h2 ref={whyUsRef} className="text-4xl pt-2 font-bold mb-4 leading-tight">
            <motion.span
              className="block"
              style={{
                backgroundImage: useTransform(
                  whyUsFillLine1,
                  (value) => `linear-gradient(to right, #000000 ${value}, #D1D5DB ${value})`
                ),
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              Why CT homeowners choose
            </motion.span>
            <motion.span
              className="block"
              style={{
                backgroundImage: useTransform(
                  whyUsFillLine2,
                  (value) => `linear-gradient(to right, #000000 ${value}, #D1D5DB ${value})`
                ),
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              A&R Renovations?
            </motion.span>
          </h2>
        
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-md md:text-lg mb-4 ">
            Our team brings precision, honesty, and a neighborly attitude to every job we take on. We&apos;re family-owned and locally trusted for roofing, gutters, and siding upgrades that actually last and for clear communication every step of the way.
          </p>
          <p className="text-md md:text-lg mb-4 "> We&apos;re licensed and insured, and we always put safety first on every project. Because we&apos;re local, you get quick responses and service that feels personal. We don&apos;t believe in pushy sales tactics. We just give honest recommendations about what you actually need. Every project also comes with a free detailed estimate and clear photos so you always know what&apos;s going on.</p>
        </motion.div>
      
      </section>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden rounded-2xl bg-[#FF6900] mb-10">
        <div className="bg-[#FF6900]" />
        <div className="text-center px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-[#000] font-black">Transform</span> Your Home?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Get a free estimate today and see why Connecticut homeowners trust A&R Renovations for all their exterior needs.
          </p>
          <Button className="bg-[#000] hover:bg-[#FF6900]/90 text-white rounded-none">
            Get Your Free Estimate
          </Button>
        </div>
      </section>
     
    </div>
  );
}
