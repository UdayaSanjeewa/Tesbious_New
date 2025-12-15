"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Home/navBar/Logo";
import NavLinks from "./Home/navBar/NavLinks";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative bg-white z-10">
      <div className="flex items-center justify-between p-4 lg:pt-10 lg:pl-20 lg:pr-20">
        <a href="/" className="flex items-center gap-2">
          <Logo />
          <p className="text-[#2A2A2A] font-[800] text-[20px] font-inter">
            Tesbious
          </p>
        </a>

        <div className="hidden lg:grid">
          <NavLinks />
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 text-[#2A2A2A] focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }} 
            transition={{ duration: 0.3 }} 
            className="absolute top-full left-0 w-full bg-white shadow-lg  flex flex-col items-center py-6 space-y-4 lg:hidden"
          >
            <NavLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
