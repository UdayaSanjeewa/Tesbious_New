"use client";

import { useState, FC, ChangeEvent, FormEvent } from "react";
import { ArrowLeft, X } from "lucide-react";

interface ContactFormProps {
  onClose: () => void;
}

interface FormData {
  need: string;
  name: string;
  email: string;
  details: string;
}

const ContactForm: FC<ContactFormProps> = ({ onClose }) => {
  const [step, setStep] = useState<number>(1);

  const [formData, setFormData] = useState<FormData>({
    need: "",
    name: "",
    email: "",
    details: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNeedSelect = (need: string) => {
    setFormData((prev) => ({ ...prev, need: need }));
  };

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted! Check the console for the data.");
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="w-[351px] lg:w-[718px] m-5 pl-5 lg:pl-0 lg:mb-10 lg:mt-10 lg:ml-20">
            <p className="w-[282px] lg:w-[451px] font-manrope text-[15px] lg:text-[24px] font-bold">
              Let's get started! Please share a few basic details with us so we
              can start the conversation.
            </p>
            <button
              onClick={handleNext}
              className="bg-[#8A38F5] mt-10 text-[#1E1F23] w-[120px] h-[45px] lg:w-[148px] lg:h-[54px] rounded-[12px] font-bold font-manrope text-[15px] lg:text-[20px] hover:bg-purple-700 transition-colors"
            >
              Start
            </button>
          </div>
        );

      case 2:
        const needs: string[] = [
          "Hire A Dedicated Developer Team",
          "Build A New Product (MVP)",
          "Give My Website Or App A Fresh Redesign",
          "Elevate My Digital Presence",
          "Help With Something Else",
        ];

        return (
          <div className="w-[351px] lg:w-[700px] p-10">
            <h2 className="font-manrope text-[15px] lg:text-[24px] font-bold mb-5">
              I Need To...
            </h2>
            <div>
              {needs.map((need, index) => {
                const isSelected = formData.need === need;

                return (
                  <button
                    key={index}
                    onClick={() => handleNeedSelect(need)}
                    className={`w-[282px] lg:w-[640px] lg:h-[80px] text-left p-4 border-b border-gray-700 text-[12px] lg:text-[18px] font-semibold font-manrope flex items-center transition-all
                  ${isSelected ? "text-white" : "text-[#999999]"}`}
                  >
                    <span className="mr-4 w-5">0{index + 1}</span>
                    <span>{need}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-between items-center mt-10">
              <div
                onClick={handlePrev}
                className="w-[45px] h-[45px] lg:w-[57px] lg:h-[57px] rounded-[10px]   bg-[#17171A] flex items-center justify-center"
              >
                <button>
                  <ArrowLeft size={18} />
                </button>
              </div>

              <button
                onClick={handleNext}
                className="bg-[#8A38F5]  text-[#1E1F23] lg:w-[148px] w-[120px] h-[45px] lg:h-[54px] rounded-[12px] font-bold font-manrope text-[15px] lg:text-[20px] hover:bg-purple-700 transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="w-[351px] lg:w-[700px] p-10 font-manrope">
            <p className="w-[282px] lg:w-[378px] font-bold text-[16px] lg:text-[24px] mb-10">
              Almost There! Tell Us A Bit About Yourself To Wrap It Up.
            </p>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="peer bg-transparent border-b-2 border-gray-700 w-full pt-4 pb-2 text-white placeholder-transparent focus:outline-none focus:border-purple-500"
                  placeholder="Your Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 -top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-purple-500 peer-focus:text-sm"
                >
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="peer bg-transparent border-b-2 border-gray-700 w-full pt-4 pb-2 text-white placeholder-transparent focus:outline-none focus:border-purple-500"
                  placeholder="Your Email Address"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-purple-500 peer-focus:text-sm"
                >
                  Your Email Address
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  className="peer bg-transparent border-b-2 border-gray-700 w-full pt-4 pb-2 text-white placeholder-transparent focus:outline-none focus:border-purple-500"
                  placeholder="Tell Us More (Optional)"
                />
                <label
                  htmlFor="details"
                  className="absolute left-0 -top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-purple-500 peer-focus:text-sm"
                >
                  Tell Us More (Optional)
                </label>
              </div>

              <div className="flex justify-between items-center mt-10">
                <div
                  onClick={handlePrev}
                  className="w-[45px] h-[45px] lg:w-[57px] lg:h-[57px] rounded-[10px]  bg-[#17171A] flex items-center justify-center"
                >
                  <button type="button">
                    <ArrowLeft size={18} />
                  </button>
                </div>

                <button
                  type="submit"
                  className="bg-[#8A38F5]  text-[#1E1F23] lg:w-[148px] w-[120px] h-[45px] lg:h-[54px] rounded-[12px] font-bold font-manrope text-[15px] lg:text-[20px] hover:bg-purple-700 transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative max-h-[90vh] bg-[#1E1F23] text-white rounded-[18px] overflow-y-auto">
      <div>{renderStep()}</div>

      <div className="h-[73px] flex items-center justify-end border-t-[1px] border-[#353535]">
        <div
          onClick={onClose}
          className="w-[57px] h-[57px] rounded-[10px] mr-5 bg-[#17171A] flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors"
        >
          <X size={24} />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
