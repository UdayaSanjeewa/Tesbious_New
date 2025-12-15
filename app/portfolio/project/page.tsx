"use client"

import NavBar from "@/components/NavBar";
import { Project } from "@/components/Portfolio/Projects/Project";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import Footer from "@/layouts/Home/Footer";

export default function ProjectPage() {
  useSmoothScroll();
  return (
    <div>
      <NavBar />
      <Project />
      <Footer />
    </div>
  );
}
