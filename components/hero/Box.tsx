import InfiniteScroller from "./Box/InfiniteScroller";
import TextBox from "./Box/TextBox";

export default function Box() {
  return (
    <div className="h-screen w-[96%] leading-9 tracking-tight lg:leading-20 ">
      <div className="flex flex-col items-center justify-between h-[85%] lg:h-[80%] xl:h-[96%] bg-[#CCAFF7] rounded-[39px]">
        <div className="pt-[20px] lg:pt-[50px]">
          <TextBox />
        </div>
        <div className="mb-[15px] lg:mb-[50px]">
          <InfiniteScroller />
        </div>
      </div>
    </div>
  );
}
