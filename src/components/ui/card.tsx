"use client";

import { motion, useAnimation } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";

interface CardProps {
  imageUrl?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  overlayGradient?: string;
  link?: string;
}

export function Card({
  imageUrl,
  title,
  description,
  children,
  className = "",
  overlayGradient = "from-black/60 via-black/40 to-transparent",
  link,
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const titleControls = useAnimation();
  const contentControls = useAnimation();

  useEffect(() => {
    if (isHovered) {
      titleControls.start({ y: -15, transition: { duration: 0.3 } });
      contentControls.start({ 
        opacity: 1, 
        height: "auto",
        transition: { duration: 0.4, ease: "easeInOut" }
      });
    } else {
      titleControls.start({ y: 0, transition: { duration: 0.3 } });
      contentControls.start({ 
        opacity: 0, 
        height: 0,
        transition: { duration: 0.3, ease: "easeInOut" }
      });
    }
  }, [isHovered, titleControls, contentControls]);

  const CardContent = (
    <motion.div
      className={`group relative overflow-hidden rounded-lg ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background Image */}
      {imageUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      )}

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${overlayGradient}`} />

      {/* Content */}
      <div className="relative z-10 flex h-full min-h-[400px]  flex-col justify-end p-6">
        {title && (
          <motion.h3
            className="mb-2 text-2xl font-bold text-white"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            animate={titleControls}
          >
            {title}
          </motion.h3>
        )}

        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={contentControls}
        >
          {description && (
            <motion.p
              className="text-md text-white/90 mb-4"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {description}
            </motion.p>
          )}

          {link && (
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.3 }}
            >
              <ArrowRight className="h-6 w-6 text-white" />
            </motion.div>
          )}
        </motion.div>

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {children}
          </motion.div>
        )}
      </div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        initial={false}
      />
    </motion.div>
  );

  if (link) {
    return (
      <Link href={link} className="block cursor-pointer">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
}

