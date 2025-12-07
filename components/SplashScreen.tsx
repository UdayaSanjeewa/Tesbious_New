"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SplashScreen({
  finishLoading,
}: {
  finishLoading: () => void;
}) {
  const text = "Tesbious Global Solutions";

  useEffect(() => {
    const timeout = setTimeout(() => {
      finishLoading();
    }, 3600);

    return () => clearTimeout(timeout);
  }, [finishLoading]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const letterAnimation = {
    hidden: { y: "100vh", opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { damping: 12, stiffness: 100 },
    },
  };

  const imageAnimation = {
    hidden: { opacity: 0, y: 20 }, 
    show: {
      opacity: 1,
      y: 0, 
      transition: {
        delay: 3.0, 
        duration: 0.5,

      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        y: "-100vh",
        transition: {
          duration: 1,
          ease: [0.76, 0, 0.24, 1],
        },
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="flex flex-col items-center">
        <motion.h1
          className="text-[20px] lg:text-[50px] font-manrope font-extrabold text-white tracking-widest flex"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={letterAnimation}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}

          <motion.span variants={letterAnimation}></motion.span>
        </motion.h1>
        <motion.div
          className="mt-8" 
          variants={imageAnimation}
          initial="hidden"
          animate="show"
        >
          {/* MAKE SURE THIS PATH IS CORRECT IN YOUR PUBLIC FOLDER */}
          <Image
            src="/logoWhite.png"
            alt="Tesbious Logo"
            width={100} 
            height={100}
            priority
            className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
