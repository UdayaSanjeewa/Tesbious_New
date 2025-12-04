"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Card from "./jobs/Card";

export default function Jobs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current || !triggerRef.current) {
      return;
    }

    const totalScroll = sectionRef.current.scrollWidth - window.innerWidth + 50;

    const context = gsap.context(() => {
      gsap.to(sectionRef.current, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 0.6,
          start: "top 100",
          end: () => `+=${totalScroll}`,
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={triggerRef} className="scroll-section-outer overflow-hidden">
      <div
        ref={sectionRef}
        className="scroll-section-inner flex w-max gap-10 pl-[10%] lg:pl-20"
      >
        <div className="scroll-section">
          <Card src="/design.mp4" type="video" label="Design" />
        </div>
        <div className="scroll-section">
          <Card src="/webdev.png" type="image" label="Web Development" />
        </div>
        <div className="scroll-section">
          <Card src="/ecom.mp4" type="video" label="E-Commerce" />
        </div>
      </div>
    </section>
  );
}
