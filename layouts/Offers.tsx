"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import OffersGrid from "@/components/offers/OffersGrid";
import OffersTitle from "@/components/offers/OffersTitle";
import PhoneImg from "@/components/offers/PhoneImg";

gsap.registerPlugin(ScrollTrigger);

export default function Offers() {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.to(boxRef.current, {
        y: -400,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  const features = [
    { id: 1, text: "Higher conversions & happier users" },
    { id: 2, text: "Business growth without limits" },
    { id: 3, text: "Reach more customers everywhere" },
    { id: 4, text: "Zero downtime & lightning speed" },
    { id: 5, text: "Faster operations & automation" },
    { id: 6, text: "Smarter decisions & higher roi" },
    { id: 7, text: "Consistent brand presence" },
    { id: 8, text: "Lower costs with higher impact" },
    { id: 9, text: "Scalable infrastructure on demand" },
    { id: 10, text: "Enhanced security & data privacy" },
  ];
  return (
    <div className="w-full flex flex-col items-center bg-white lg:pt-[50px]">
      <div className="w-[96%]" ref={boxRef}>
        <PhoneImg />
      </div>
      <div>
        <OffersTitle />
      </div>
      <div className="pt-[70px] pb-[150px]">
        <OffersGrid items={features} />
      </div>
    </div>
  );
}
