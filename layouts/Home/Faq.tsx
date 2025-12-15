import { FaqAccordion } from "@/components/Home/faq/FaqAccordion";
import TopicAnimator from "@/components/TopicAnimator";

const faqData = [
  {
    question:
      "What Makes Tesbious Global Solutions Different From Other Digital Agencies?",
    answer:
      "At Tesbious Global Solutions, we differentiate ourselves by focusing on custom, data-driven strategies rather than one-size-fits-all solutions. We pride ourselves on transparent communication and acting as a true partner invested in your long-term growth.",
  },
  {
    question:
      "Do You Work With Businesses Of All Sizes, Or Only Large Enterprises?",
    answer:
      "We partner with a diverse range of clients, from ambitious startups to established large enterprises. Our strategies are scalable and tailored to your specific stage of growth.",
  },
  {
    question:
      "Can I Start With One Service And Add Others Later As My Business Grows?",
    answer:
      "Absolutely. Many of our clients start by focusing on what's most suitable for them. As your business grows, we can seamlessly integrate additional services to support your scaling strategy.",
  },
  {
    question: "Will I Receive Regular Performance Updates?",
    answer:
      "Yes, transparency is a core part of our process. You will receive regular, detailed performance reports (typically monthly / weekly) that break down key metrics, campaign progress, and our analysis of the results.",
  },
  {
    question:
      "Are All Services Provided Directly By Tesbious Global Solutions?",
    answer:
      "Tesbious Global Solutions operates as the parent company overseeing specialized brands in web development, software solutions, graphic design, video editing, e-commerce, and digital marketing. Each service is delivered through our dedicated divisions, ensuring expert-level quality while maintaining a unified standard of excellence across all brands.",
  },
];

export default function Faq() {
  return (
    <section className="bg-[#141416]">
      <div className="w-[90%] mx-auto">
        <h2 className="font-manrope text-[24px] lg:text-[64px] 2xl:text-[75px] font-semibold text-white pb-[30px] lg:pb-[80px] pt-[40px]">
          <TopicAnimator text="Frequently Asked" />
          <br />
          <TopicAnimator text="Questions" />
        </h2>
        <FaqAccordion data={faqData} />
      </div>
    </section>
  );
}
