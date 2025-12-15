import SubTopicAnimator from "@/components/SubTopicAnimator";
import Image from "next/image";
import { motion } from "framer-motion";

export function Project() {
  const imageVariant = {
    hidden: { opacity: 0, y: 100, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div className="m-5 lg:m-[100px]">
      {/* Project Name */}
      <div className="text-[150px] font-semibold font-manrope">
        <SubTopicAnimator text="Saza's Portfolio." />
      </div>

      {/* Project Intro section */}
      <div className="flex items-start font-manrope  justify-between w-[1500px] mt-[100px]">
        <div className="flex gap-2 items-center">
          <div className="text-[20px] font-semibold">
            <SubTopicAnimator text="Introduction" />
          </div>
        </div>

        <div>
          <div className="w-[600px] text-[25px] font-[400] leading-8  text-justify">
            <SubTopicAnimator
              text="Building the web, one line of code at a time. I am a [Role, e.g., Full
          Stack Engineer] dedicated to robust architecture and clean code. I
          help startups and businesses transform ideas into reality using modern
          web technologies."
            />
          </div>
          {/* live project link */}
          <motion.div
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }} 
          >
            <a
              href="/"
              className="w-[120px] h-[35px] flex items-center justify-between p-4 transition-all duration-500 bg-[#8B51E0] rounded-[105px] mt-5 hover:text-white hover:bg-black"
            >
              <p className="text-[13px] font-manrope font-semibold">
                Live Project
              </p>
              <p className="h-[5px] w-[5px] rounded-[105px] bg-white"></p>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Project images */}
      <div className="flex gap-2 mt-[100px] items-center justify-center">
        {/* Image 1 */}
        <motion.div
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} 
        >
          <Image
            src={"/imgOne.avif"}
            alt="Project screenshot one"
            width={850}
            height={850}
            className="rounded-[36px]"
          />
        </motion.div>

        <motion.div
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image
            src={"/imgTwo.avif"}
            alt="Project screenshot two"
            width={850}
            height={850}
            className="rounded-[36px]"
          />
        </motion.div>
      </div>

      {/* final thoughts of project */}
      <div className="flex items-start font-manrope  justify-between w-[1500px] mt-[200px]">
        <div className="flex gap-2 items-center">
          <div className="text-[20px] font-manrope font-semibold">
            <SubTopicAnimator text="Final Thoughts" />
          </div>
        </div>
        <div className="w-[600px] font-manrope text-justify ">
          <div className="w-[600px] text-[25px] font-[500] leading-8">
            <SubTopicAnimator
              text="This portfolio reflects my belief that code is a creative medium.
            It’s clean, performant, and built with purpose."
            />
          </div>
          <div className="mt-10 text-[18px] leading-6">
            <SubTopicAnimator
              text="By merging technical precision with intuitive design, I strive to
            build digital experiences that don't just function seamlessly, but
            also leave a lasting impression on the user."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
