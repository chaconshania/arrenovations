"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-primary-foreground py-16 px-6">
      <div className="max-w-7xl px-6  mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-light mb-6">A&R RENOVATIONS</h3>
            <div className="space-y-2 text-sm font-light"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-light mb-6 ">Services</h4>
            <div className="space-y-2 text-sm font-light opacity-80">
              <div>Residential Roofing</div>
              <div>Commercial Roofing</div>
              <div>Roof Repairs</div>
              <div>Gutters Installation</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-light mb-6 ">Navigation</h4>
            <div className="space-y-2 text-sm font-light opacity-80">
              <div>Services</div>
              <div>Projects</div>
              <div>About</div>
              <div>Contact</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-light mb-6 ">Contact</h4>
            <div className="space-y-2 text-sm font-light opacity-80">
              <div>arrenovations.mc@gmail.com</div>
              <div>(203) 943-8650</div>
              <div>Serving Fairfield County</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-primary-foreground/20 mt-12 pt-8 text-center"
        >
          <p className="text-sm font-light opacity-60">
            © 2025 A&R Renovations LLC. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
