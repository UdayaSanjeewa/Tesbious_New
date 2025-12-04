"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function SubTopicAnimator({ text }: { text: string }) {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = el.current;
    if (!element) return;

    const isChinese = /[\u4e00-\u9fff]/.test(text);
    const segmenter = isChinese
      ? new Intl.Segmenter("zh", { granularity: "word" })
      : null;

    gsap.set(element, { opacity: 1 });

    const split = SplitText.create(element, {
      type: "words",
      wordsClass: "word",
      prepareText: (t) => {
        if (isChinese && segmenter) {
          return [...segmenter.segment(t)]
            .map((s) => s.segment)
            .join(String.fromCharCode(8204)); // zero-width char
        }
        return t; // English stays the same
      },
      wordDelimiter: { delimiter: /\u200c/, replaceWith: " " },
      autoSplit: true,
    });

    gsap.from(split.words, {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      ease: "back.out(1.7)",
      duration: 0.8,
      scrollTrigger: {
        trigger: element,
        start: "top 80%", // play when top of element hits 80% of viewport
        toggleActions: "play none none none", // play only once
      },
    });

    return () => {
      split.revert(); // clean up
    };
  }, [text]);

  return (
    <span ref={el} className="split ">
      {text}
    </span>
  );
}
