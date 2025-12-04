"use client";

import TestemonialHeading from "@/components/testemonial/TestemonialHeading";
import TestimonialCard from "@/components/testemonial/TestimonialCard";
import { useState } from "react";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  review: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sasanka",
    role: "Founder of Aceternity",
    image: "/logo.png",
    review:
      "This platform is revolutionary. I hired my first candidate from Playful recruiting and they turned out to be great. Now since I'm asked to write a bigger review so that it fills the first card, I'll just go on and start writing gibberish. This page is cool, IDK about playful, just go ahead and buy Aceternity Pro.",
  },
  {
    name: "Alex Johnson",
    role: "CEO of InnovateX",
    image: "/user2.jpg",
    review:
      "Working with Playful was a game-changer. Our team grew faster and smarter thanks to their approach.",
  },
  {
    name: "Maria Chen",
    role: "CTO of BrightLabs",
    image: "/user3.jpg",
    review:
      "I’ve tried many recruitment tools, but none feel this personal. Absolutely love it!",
  },
];

export default function Testemonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-[#141416] pb-[60px]">
      <div className="h-screen flex flex-col justify-end lg:p-20 p-6">
        <TestemonialHeading />
      </div>
      <div className="p-3 lg:p-10 h-screen flex flex-col justify-center">
        <TestimonialCard
          name={currentTestimonial.name}
          role={currentTestimonial.role}
          image={currentTestimonial.image}
          review={currentTestimonial.review}
          total={testimonials.length}
          currentIndex={currentIndex}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </div>
    </div>
  );
}
