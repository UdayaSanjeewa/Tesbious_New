import TopicAnimator from "../../TopicAnimator";

export default function Title() {
  return (
    <div className="w-[313px] h-[285px] lg:w-[843px] lg:h-[228px] text-black lg:text-[66px] text-[45px] font-manrope font-[700] leading-14 tracking-tight lg:leading-20 ">
      <p>
        <TopicAnimator text="Welcome!" />
      </p>
      <p>
        <TopicAnimator text="Empowering Your Journey" />
      </p>
      <div className="flex gap-2 ">
        <p>
          <TopicAnimator text="to" />
        </p>
        <p className="text-[#9C65EE]">
          <TopicAnimator text="Digital" />
        </p>
        <p className="text-[#9C65EE] hidden lg:grid">
          <TopicAnimator text="Excellence!" />
        </p>
      </div>
      <p className="text-[#9C65EE] lg:hidden">
        <TopicAnimator text="Excellence!" />
      </p>
    </div>
  );
}
