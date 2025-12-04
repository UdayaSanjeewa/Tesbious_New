import Image from "next/image";

export default function PhoneImg() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Image
        src="/phoneImg.png"
        alt="phone img"
        width={1385}
        height={1039}
        className="w-[96%] h-[90%] lg:h-[80%] xl:h-[100%] rounded-[57px] object-cover"
      />
    </div>
  );
}
