"use client";

import Grid from "@/components/grid";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollY, [0, 500], [0, 300]);
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <div className="mx-4 space-y-10">
      <section
        ref={ref}
        className="relative h-[70vh] flex items-center justify-center overflow-hidden  rounded-2xl"
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

    
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10 " />
        <div className="relative z-20 text-center ">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
           CT HOMES DESERVE BETTER. <br /> We Build Them That Way.
          </h1>
          <p className="mt-6 text-md lg:text-lg text-gray-200 max-w-2xl mx-auto ">
          Expert roofing, gutters, and exterior renovations from a local crew that treats your home like our own.
          </p>
          <Button className="mt-6 bg-[#FF6900] hover:bg-[#FF6900]/90 text-black rounded-none">Get Your Free Estimate</Button>
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
                Roofing Services
              </h2>
              <h2 className="text-4xl font-bold  ">
                Top notch roofing services, <br /> trusted by many in CT
              </h2>
            </div>
            <div className="pt-3 lg:pt-0">
              <p className="text-md pt-0 md:pt-10">
               For over a decade, A&R Renovations has been the trusted name for roof repair, gutter installation, siding, and emergency fixes across Connecticut. We're not the biggest company out there—and that's exactly how our customers like it. <br /> <br />
              Every project gets our full attention, from the first call to the final cleanup. Whether you're dealing with storm damage, planning a full exterior refresh, or just need gutters that actually work, we show up on time, do it right, and stand behind our work.
              </p>
            </div>
          </div>
          
        </motion.div>
     
      </section>
      <section>
        <div className="max-w-7xl mx-auto pb-4 grid grid-cols-1 md:grid-cols-3 gap-2">
          <Card 
            imageUrl="https://images.unsplash.com/photo-1673645652590-9d21295bf4ac?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Roofing Services"
            description="Whether it's a small leak or a full replacement, we handle every roofing project with the same care and expertise. Quality materials, clean work sites, and warranties you can count on."
            link="/roofing"
          />
          <Card 
            imageUrl="https://images.unsplash.com/photo-1673645652590-9d21295bf4ac?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Gutter Installation"
            description="Seamless gutters designed to protect your foundation, siding, and landscaping. Stop worrying about clogs, leaks, and water damage."
            link="/gutters"
          />
          <Card 
            imageUrl="https://images.unsplash.com/photo-1673645652590-9d21295bf4ac?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Siding Services"
            description="Transform your home's curb appeal and energy efficiency with new siding. We work with vinyl, fiber cement, and wood—installed to last."
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
      <section className="max-w-7xl mx-auto my-[10vh] my-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div 
          className="w-full h-[60vh] rounded-xl overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            alt="A&R Renovations exterior project"
            className="object-cover w-full h-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose A&R Renovations?</h2>
          <p className="text-md md:text-lg mb-4 text-muted-foreground">
            Our team brings precision, honesty, and a neighborly attitude to every job we take on. We're family-owned and locally trusted for roofing, gutters, and siding upgrades that actually last—and for clear communication every step of the way. 
          </p>
          <ul className="list-disc ml-5 text-md space-y-2 text-muted-foreground">
            <li>Licensed, insured, and safety-first on every project</li>
            <li>Locally based — fast response and personal service</li>
            <li>No high-pressure sales, just honest recommendations</li>
            <li>Free, detailed estimates and project photos provided</li>
          </ul>
        </motion.div>
      </section>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden rounded-2xl my-10">
        <motion.div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1673645652590-9d21295bf4ac?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-[#FF6900]">Transform</span> Your Home?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Get a free estimate today and see why Connecticut homeowners trust A&R Renovations for all their exterior needs.
          </p>
          <Button className="bg-[#FF6900] hover:bg-[#FF6900]/90 text-black rounded-none">
            Get Your Free Estimate
          </Button>
        </div>
      </section>
    </div>
  );
}
