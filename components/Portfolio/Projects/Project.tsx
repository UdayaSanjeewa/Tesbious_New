"use client";

import SubTopicAnimator from "@/components/SubTopicAnimator";
import Image from "next/image";
import { motion } from "framer-motion";

export interface ProjectDetails {
  id: string;
  title: string;
  year: string;
  intro: string;
  liveUrl: string;
  images: string[];
  thoughtsTitle: string;
  thoughtsBody1: string;
  meta: {
    location: string;
    industry: string;
    services: string;
    timeline: string;
  };
  challenge: string;
  solution: string;
  highlights: string[];
}

export function Project({ project }: { project: ProjectDetails }) {
  const imageVariant = {
    hidden: { opacity: 0, y: 100, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div className="m-5 lg:m-[100px]">
      {/* Dynamic Project Name */}
      <div className="text-[70px] lg:text-[150px] font-semibold font-manrope">
        <SubTopicAnimator text={project.title} />
      </div>

      <div className="flex flex-col lg:flex-row items-start font-manrope justify-between lg:w-[1300px] 2xl:w-[1500px] mt-[50px] lg:mt-[100px]">
        <div className="flex gap-2 items-center">
          <div className="text-[25px] lg:text-[20px] font-semibold">
            <SubTopicAnimator text="Introduction" />
          </div>
        </div>

        <div>
          <div className="w-[320px] lg:w-[600px] text-[18px] mt-5 lg:mt-0 lg:text-[25px] font-[400] leading-8 text-justify">
            <SubTopicAnimator text={project.intro} />
          </div>

          <motion.div
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <a
              href={project.liveUrl}
              target="_blank"
              className="w-[120px] h-[35px] flex items-center justify-between p-4 transition-all duration-500 bg-[#8B51E0] rounded-[105px] mt-5 hover:text-white hover:bg-black"
            >
              <p className="text-[13px] font-manrope font-semibold">
                Live Project
              </p>
              <p className="h-[5px] w-[5px] rounded-[105px] bg-white"></p>
            </a>
          </motion.div>
        </div>
      </div>

      <section className="lg:w-full font-manrope lg:flex lg:justify-end mt-20">
        <div className="lg:w-1/2">
          <div className="flex items-center justify-around py-4 border-t border-zinc-200 last:border-b">
            {/* Label - Left Side */}
            <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-tight">
              <p>Industry</p>
            </span>
            {/* Value - Right Side */}
            <span className="text-right text-sm w-[300px] md:text-xl font-normal text-zinc-900">
              {project.meta.industry}
            </span>
          </div>
          <div className="flex items-center py-4 justify-around border-t border-zinc-200 last:border-b">
            {/* Label - Left Side */}
            <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-tight">
              <p>Location</p>
            </span>
            {/* Value - Right Side */}
            <span className="text-right text-sm w-[300px] md:text-xl font-normal text-zinc-900">
              {project.meta.location}
            </span>
          </div>
          <div className="flex items-center py-4 justify-around border-t border-zinc-200 last:border-b">
            {/* Label - Left Side */}
            <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-tight">
              <p>Services</p>
            </span>
            {/* Value - Right Side */}
            <span className="text-right text-sm w-[300px] md:text-xl font-normal text-zinc-900">
              {project.meta.services}
            </span>
          </div>
          <div className="flex items-center py-4 justify-around border-t border-zinc-200 last:border-b">
            {/* Label - Left Side */}
            <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-tight">
              <p>Timeline</p>
            </span>
            {/* Value - Right Side */}
            <span className="text-right text-sm w-[300px] md:text-xl font-normal text-zinc-900">
              {project.meta.timeline}
            </span>
          </div>
        </div>
      </section>

      {/* Dynamic Images */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-2 mt-10 lg:mt-[100px] items-center justify-center">
        {project.images.slice(0, 2).map((src, index) => (
          <motion.div
            key={index}
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src={src}
              alt={`${project.title} screenshot ${index + 1}`}
              width={850}
              height={850}
              className="rounded-[36px]"
            />
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row items-start font-manrope justify-between mt-[80px] mb-[80px] lg:mb-0 lg:w-[1300px] 2xl:w-[1500px] lg:mt-[200px]">
        <div className="flex gap-2 items-center">
          <div className="text-[20px]  font-manrope font-semibold">
            <SubTopicAnimator text="Challenge" />
          </div>
        </div>
        <div className="w-[320px] lg:w-[600px] font-manrope text-justify ">
          <div className="text-[18px] lg:text-[25px] font-[400] leading-8">
            <SubTopicAnimator text={project.challenge} />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start font-manrope justify-between mt-[80px] mb-[20px] lg:mb-0 lg:w-[1300px] 2xl:w-[1500px] lg:mt-[50px]">
        <div className="flex gap-2 items-center">
          <div className="text-[20px] font-manrope font-semibold">
            <SubTopicAnimator text="Solution" />
          </div>
        </div>
        <div className="w-[320px] lg:w-[600px] font-manrope text-justify ">
          <div className="text-[18px] lg:text-[25px] font-[400] leading-8">
            <SubTopicAnimator text={project.solution} />
          </div>
        </div>
      </div>

      {/* Dynamic Images */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-2 mt-10 lg:mt-[100px] items-center justify-center">
        {project.images.slice(2, 3).map((src, index) => (
          <motion.div
            key={index}
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src={src}
              alt={`${project.title} screenshot ${index + 1}`}
              width={1500}
              height={1500}
              className="rounded-[36px]"
            />
          </motion.div>
        ))}
      </div>

      {/* Final Thoughts Section */}
      <div className="flex flex-col lg:flex-row items-start font-manrope justify-between mt-[80px] mb-[80px] lg:mb-0 lg:w-[1300px] 2xl:w-[1500px] lg:mt-[200px]">
        <div className="flex gap-2 items-center">
          <div className="text-[20px] font-manrope font-semibold">
            <SubTopicAnimator text="Final Thoughts" />
          </div>
        </div>
        <div className="w-[320px] lg:w-[600px] font-manrope text-justify ">
          <div className="w-[320px] lg:w-[600px] text-[18px] mt-5 lg:mt-0 lg:text-[25px] font-[500] leading-8">
            <SubTopicAnimator text={project.thoughtsTitle} />
          </div>
          <div className="mt-10 text-[18px] leading-6">
            <SubTopicAnimator text={project.thoughtsBody1} />
          </div>
        </div>
      </div>
    </div>
  );
}
