import Box from "@/components/Home/hero/Box";
import NavBar from "@/components/NavBar";
import Title from "@/components/Home/hero/Title";
import Jobs from "@/components/Home/hero/Jobs";

export default function Hero() {
  return (
    <div>
      <NavBar />
      <div className="pt-5 flex justify-center lg:justify-start  lg:pl-[130px] lg:pt-[50px] lg:pb-[50px]">
        <Title />
      </div>
      <div className=" pb-[100px] pt-[50px] lg:pt-[80px] lg:pb-[50px]">
        <Jobs />
      </div>

      <div className="flex w-full items-center justify-center pb-[50px]">
        <Box />
      </div>
    </div>
  );
}
