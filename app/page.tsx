"use client";

import { useState } from "react";
import ContactForm from "@/components/contact/ContactForm";
import Contact from "@/layouts/Contact";
import Faq from "@/layouts/Faq";
import Footer from "@/layouts/Footer";
import Hero from "@/layouts/Hero";
import Offers from "@/layouts/Offers";
import Testemonial from "@/layouts/Testemonial";
import { Menu } from "lucide-react";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import SplashScreen from "@/components/SplashScreen";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  useSmoothScroll();

  return (
    <div>

      <AnimatePresence mode="wait">
        {loading && <SplashScreen finishLoading={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Hero />
          <Offers />
          <Testemonial />
          <Faq />
          <Contact />
          <Footer />

          <div className="flex justify-center">
            <button
              onClick={() => setIsFormOpen(true)}
              className="fixed z-40 bottom-20 text-[20px] font-medium bg-[#1E1F23] text-[#7B7C83] font-manrope w-[356px] h-[73px] lg:w-[356px] lg:h-[73px] 2xl:w-[400px] 2xl:[80px] rounded-[10px] flex items-center justify-around hover:text-white transition-all duration-1000"
            >
              <span>Tell Us About Your Needs</span>
              <div className="w-[57px] h-[57px] rounded-[10px] bg-[#17171A] flex items-center justify-center">
                <Menu size={24} />
              </div>
            </button>
          </div>

          {isFormOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
              <ContactForm onClose={() => setIsFormOpen(false)} />
            </div>
          )}
        </>
      )}
    </div>
  );
}
