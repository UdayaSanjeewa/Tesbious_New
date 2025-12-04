"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function TopicAnimator({ text }: { text: string }) {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = el.current;
    if (!element) return;

    gsap.set(element, { opacity: 1 });

    const split = SplitText.create(element, {
      type: "words",
      wordsClass: "word",
    });

    gsap.from(split.words, {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      ease: "back.out(1.7)",
      duration: 0.8,
      scrollTrigger: {
        trigger: element,
        start: "top 70%", 
        toggleActions: "play none none none",
      },
    });

    return () => {
      split.revert();
    };
  }, [text]);

  return (
    <span ref={el} className="split">
      {text}
    </span>
  );
}