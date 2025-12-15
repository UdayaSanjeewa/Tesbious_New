"use client";

import NavBar from "@/components/NavBar";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import Footer from "@/layouts/Home/Footer";
import PortfolioPage from "@/layouts/Portfolio/PortfolioPage";

export default function Portolio() {
  useSmoothScroll();

  return (
    <div>
      <NavBar />
      <PortfolioPage />
      <Footer />
    </div>
  );
}
