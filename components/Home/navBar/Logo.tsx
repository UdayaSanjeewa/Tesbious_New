import Image from "next/image";


export default function Logo() {
  return (
    <div>
      <Image
        src='/logo.png'
        alt="logo"
        height={43}
        width={50}
      />
    </div>
  );
}
