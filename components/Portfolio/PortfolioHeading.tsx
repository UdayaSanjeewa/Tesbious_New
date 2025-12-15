import TopicAnimator from "../TopicAnimator";

export default function PortfolioHeading() {
  return (
    <div className="flex flex-col  lg:flex-row lg:items-center">
      <div className="text-[70px] lg:text-[150px] font-manrope font-bold tracking-tight">
        <TopicAnimator text="Portfolio." />
      </div>
      <div className=" lg:w-[350px] text-sm md:text-base font-manrope lg:ml-60">
        <div className="mb-2 font-semibold text-black">
          <TopicAnimator text="(2020-25&copy;)" />
        </div>

        <div className="leading-relaxed text-gray-700">
          <TopicAnimator
            text="Digital products built with purpose. Focusing on clean architecture
          and user experience."
          />
        </div>
      </div>
    </div>
  );
}
