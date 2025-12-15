import TopicAnimator from "@/components/TopicAnimator";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-[#141416] text-[#745F93] font-manrope">
      <main className="flex-grow flex flex-col items-center justify-center text-center p-8">
        <div className="mx-auto">
          <p className="text-[15px] lg:text-[32px] 2xl:text-[40px] font-semibold">
            <TopicAnimator text="Proven." />
          </p>
          <h1 className="text-[24px] lg:text-[90px] 2xl:text-[100px] font-extrabold leading-tight">
            <TopicAnimator text="Reliable, Innovative" />
          </h1>
          <h1 className="text-[24px] lg:text-[64px] 2xl:text-[70px] font-semibold leading-tight">
            <TopicAnimator text="Expertise" />
          </h1>
        </div>
      </main>
    </div>
  );
}
