import Image from "next/image";

export default function PhoneImg() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Image
        src="/phoneImg.png"
        alt="phone img"
        width={1920}
        height={1080}
        className="w-[100%] h-[90%] lg:h-[80%] xl:h-[100%] rounded-[57px] object-cover"
      />
    </div>
  );
}
