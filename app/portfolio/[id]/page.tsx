"use client";

import { use } from "react"; 
import NavBar from "@/components/NavBar";
import { Project } from "@/components/Portfolio/Projects/Project";
import { projects } from "@/data/projects";
import Footer from "@/layouts/Home/Footer";
import useSmoothScroll from "@/hooks/useSmoothScroll";


export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>; 
}) {
  useSmoothScroll();


  const { id } = use(params);

  const projectData = projects.find((p) => p.id === id);

  if (!projectData) return <div>Project not found</div>;

  return (
    <div>
      <NavBar />
      <Project project={projectData} />
      <Footer />
    </div>
  );
}