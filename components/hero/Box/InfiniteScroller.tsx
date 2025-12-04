"use client";

import { motion } from "framer-motion";
import React from "react";

export default function InfiniteScroller() {
  const words = [
    "Branding",
    "UI Developement",
    "AI Integration",
    "Backend Development",
    "Web Design",
  ];

  const MarqueeContent = () => (
    <div className="flex items-center">
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <span className="mx-6 text-[24px] lg:text-[28px] xl:text-[40px] 2xl:text-[60px] tracking-wide text-[#515151] font-manrope font-[500]">
            {word}
          </span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="w-full flex justify-center">
      <div className="w-[96%] overflow-hidden py-4">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          <MarqueeContent />
          <MarqueeContent />
        </motion.div>
      </div>
    </div>
  );
}
