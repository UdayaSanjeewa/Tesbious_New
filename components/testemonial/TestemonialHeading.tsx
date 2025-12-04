import SubTopicAnimator from "../SubTopicAnimator";
import TopicAnimator from "../TopicAnimator";

export default function TestemonialHeading() {
  return (
    <div className="text-white">
      <p className="w-[80%] lg:w-[97%] text-[24px] lg:text-[70px] xl:text-[96px] font-[700] lg:leading-[100px] font-manrope capitalize">
        <TopicAnimator text="Proven Impact, Genuine Experiences/" />
      </p>
      <p className="w-[90%] hidden lg:grid text-[#747474] pt-5 font-manrope xl:text-[24px] font-[400] capitalize">
        <SubTopicAnimator
          text="Discover how we've helped clients turn their boldest visions into
        thriving realities. These are partnerships that transcend the
        transactional."
        />
      </p>
    </div>
  );
}
