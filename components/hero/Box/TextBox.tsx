import SubTopicAnimator from "@/components/SubTopicAnimator";


export default function TextBox() {
  return (
    <div className=" flex justify-center text-black text-[28px] font-semibold lg:text-[30px] xl:text-[48px] 2xl:text-[65px] font-manrope lg:font-[500]">
      <p className="w-[90%]">
        <SubTopicAnimator
          text="we drive business growth through digital innovation. Specializing in
        digital marketing and software solutions, we deliver tailored strategies
        to empower your success in a competitive digital world."
        />
      </p>
    </div>
  );
}
