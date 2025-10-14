"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Grid() {
  const cards = [
    {
      title: "GUTTER INSTALLATIONS & REPAIRS",
      description:
        "Complete new roof systems with premium materials and expert craftsmanship.",
      href: "/gutters",
      image: "/images/gutters.jpg",
      className: "sm:row-span-2 ", // tall
    },
    {
      title: "ROOF INSPECTIONS",
      description:
        "Complete new roof systems with premium materials and expert craftsmanship.",
      href: "/roof-inspections",
      image: "/images/roof.jpg",
      className: "sm:col-span-2 ", // wider
    },

    {
      title: "COPPER SERVICES",
      description:
        "Complete new roof systems with premium materials and expert craftsmanship.",
      href: "/copper",
      image: "/images/copper.jpg",
      className: "",
    },
    {
      title: "SIDING SERVICES",
      description:
        "Complete new roof systems with premium materials and expert craftsmanship.",
      href: "/siding",
      image: "/images/siding.jpg",
      className: "",
    },
    {
      title: "CUSTOM WORK",
      description:
        "Complete new roof systems with premium materials and expert craftsmanship.",
      href: "/custom",
      image: "/images/custom.jpg",
      className: "sm:col-span-2",
    },
    {
      title: "24/7 EMERGENCY SERVICES",
      description:
        "Complete new roof systems with premium materials and expert craftsmanship.",
      href: "/emergency",
      image: "/images/emergency.jpg",
      className: "h-64",
    },
  ];

  return (
    <main className=" mx-auto px-6 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[16rem]">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className={`relative rounded-xl overflow-hidden flex items-end ${card.className}`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${card.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="relative z-10 p-4 text-white">
              <h2 className="font-black text-2xl">{card.title}</h2>
              <p className="pt-2 text-sm">{card.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
