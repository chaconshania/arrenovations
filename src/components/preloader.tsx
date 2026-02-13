"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const imageDone = useRef(false);
  const timerDone = useRef(false);
  const exitStarted = useRef(false);
  const controls = useAnimationControls();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Preload hero image in parallel
    const img = new Image();
    img.src = "/images/hero/cover_image.jpg";
    img.onload = () => { imageDone.current = true; tryExit(); };
    img.onerror = () => { imageDone.current = true; tryExit(); };

    const timer = setTimeout(() => {
      timerDone.current = true;
      tryExit();
    }, 1200);

    function tryExit() {
      if (!timerDone.current || !imageDone.current || exitStarted.current) return;
      exitStarted.current = true;

      // Brief hold, then slide up
      setTimeout(() => {
        controls.start({
          y: "-100%",
          transition: { duration: 0.8, ease: "easeInOut" },
        }).then(() => {
          document.body.style.overflow = "";
          onComplete();
        });
      }, 150);
    }

    return () => clearTimeout(timer);
  }, [controls, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black"
      animate={controls}
    >
      <motion.span
        className="text-xl font-bold text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        A&R RENOVATIONS
      </motion.span>
    </motion.div>
  );
}
