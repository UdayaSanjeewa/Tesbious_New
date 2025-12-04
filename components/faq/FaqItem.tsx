"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { Plus } from "lucide-react";

// Define the animation variants
const accordionVariants: Variants = {
  collapsed: {
    opacity: 0,
    height: 0,
    marginTop: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  open: {
    opacity: 1,
    height: "auto",
    marginTop: "16px",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

// Define the props
interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="border-b border-[#2D2D2D] w-[95%] lg:w-[80%]">
      <motion.header
        initial={false}
        onClick={onToggle}
        className="flex gap-10 items-center py-5 cursor-pointer"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Plus className="h-8 w-8 text-[#8B51E0]" />
        </motion.div>
        <h3 className="font-manrope text-[14px] lg:text-[24px] 2xl:text-[28px] text-[#A6A1A1]">{question}</h3>
      </motion.header>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={accordionVariants}
            className="overflow-hidden"
          >
            <p className="font-manrope text-[12px] lg:text-[18px] 2xl:text-[22px] w-[80%] ml-[5%] pb-10 text-[#5D5D5D]">{answer}</p>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
