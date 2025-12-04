import React from "react";

interface GridItem {
  id: number;
  text: string;
}

interface OffersGridProps {
  items: GridItem[];
  sectionTitle?: string;
}

const OffersGrid: React.FC<OffersGridProps> = ({ items, sectionTitle }) => {
  return (
    <section className="">
      <div className="">
        <div className="p-2 lg:p-0 lg:grid grid-cols-2 gap-x-40 gap-y-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-2 h-[82px]  border-[#C3C3C3] border-b-2  font-manrope font-[400]"
            >
              {/* Numbering */}
              <span className="text-[#929296] text-[36px] lg:text-[22px] xl:text-[30px] 2xl:text-[42px]">
                {item.id.toString().padStart(2, "0")}.
              </span>
              {/* Text content */}
              <p className="text-black text-[20px] lg:text-[22px] xl:text-[30px] 2xl:text-[42px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersGrid;
