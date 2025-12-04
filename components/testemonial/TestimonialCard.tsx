"use client";

import Image from "next/image";
import { MoveLeft, MoveRight } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  role: string;
  image: string;
  review: string;
  total: number;
  currentIndex: number;
  onPrev?: () => void;
  onNext?: () => void;
};

export default function TestimonialCard({
  name,
  role,
  image,
  review,
  total,
  currentIndex,
  onPrev,
  onNext,
}: TestimonialCardProps) {
  return (
    <div className="bg-gradient-to-b from-[#141416] to-[#241D2D] text-white rounded-[37px] w-[95%] h-[90%] mx-auto shadow-lg border border-[#222]">
      
      
      <div className="flex pl-[5%] pt-[5%] lg:hidden items-center gap-3">
        <div className="rounded-full overflow-hidden">
          <Image
            src={image}
            alt="IMG"
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
        <div className="text-[13px] lg:text-[16px] font-[400] w-[160px] font-sans text-white capitalize">
          <p>{name}</p>
          <p>{role}</p>
        </div>
      </div>

      <div className="w-full h-[70%] lg:h-[80%] flex items-center justify-center lg:leading-20 lg:tracking-tighter">
        <p className="text-[16px] lg:text-[25px] xl:text-[32px] w-[80%] font-sans leading-[36px] font-[400] text-[#F1ECEC]">
          {review}
        </p>
      </div>

      <div className="flex justify-between pl-[7%] pr-[7%]">
        <div className="hidden lg:flex items-center gap-3">
          <div className="rounded-full overflow-hidden">
            <Image
              src={image}
              alt="IMG"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div className="text-[16px] font-[400] w-[160px] font-sans text-white capitalize">
            <p>{name}</p>
            <p>{role}</p>
          </div>
        </div>

        <div className="flex items-center  w-[138px] h-[71px] gap-[6px] lg:pl-[9px] lg:pr-[9px] lg:pt-[7px] lg:pb-[7px] lg:mr-[7%] bg-[#1E1F23]">
          <button
            onClick={onPrev}
            className="w-[57px] h-[57px] rounded-md bg-[#17171A] border border-[#333] flex items-center justify-center"
          >
            <MoveLeft size={18} />
          </button>
          <button
            onClick={onNext}
            className="w-[57px] h-[57px] rounded-md bg-[#17171A] border border-[#333] flex items-center justify-center"
          >
            <MoveRight size={18} />
          </button>
        </div>

        <div className="hidden lg:flex justify-center mt-6">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full mx-1 ${
                i === currentIndex ? "bg-white" : "bg-[#555]"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
