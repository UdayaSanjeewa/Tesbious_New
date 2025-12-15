"use client";

type CardProps = {
  src: string;
  type?: "image" | "video";
  label: string;
};

export default function Card({ src, type = "image", label }: CardProps) {
  return (
    <div className="w-[351px] h-[540px] lg:w-[752px] lg:h-[517px] rounded-[22px] relative overflow-hidden">
      {type === "video" ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-[22px]"
        />
      ) : (
        <img
          src={src}
          alt={label}
          className="w-full h-full object-cover rounded-[22px]"
        />
      )}

      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-[48px] font-[700] text-center font-manrope">{label}</p>
      </div>
    </div>
  );
}
