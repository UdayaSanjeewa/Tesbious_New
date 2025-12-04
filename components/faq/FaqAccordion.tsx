"use client";

import { useState } from "react";
import { FaqItem } from "./FaqItem";

interface FaqItemData {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  data: FaqItemData[];
}

export function FaqAccordion({ data }: FaqAccordionProps) {
  // State to manage which accordion item is open
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {data.map((item, i) => {
        const isOpen = i === expanded;

        return (
          <FaqItem
            key={item.question}
            question={item.question}
            answer={item.answer}
            isOpen={isOpen}
            // This toggle logic creates the "only one open at a time" behavior
            onToggle={() => setExpanded(isOpen ? null : i)}
          />
        );
      })}
    </div>
  );
}
