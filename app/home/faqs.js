import React from "react";
import FAQItem from "./faqItem";
import SectionDots from "@/components/ui/sectionDots";

const faqs = [
  {
    question: "Who are your services for?",
    answer:
      "We work with individuals, small businesses, brands, organizations, and event hosts.",
  },
  {
    question: "Do you offer flexible service options?",
    answer:
      "Yes. Our services can be tailored to your needs depending on the scope, timeline, and goals of your project.",
  },
  {
    question: "Do you create content for social media?",
    answer:
      "Yes. We create strategy-driven content designed to grow engagement and strengthen your brand presence.",
  },
  {
    question: "Are JMC and Jades Cam separate companies?",
    answer:
      "Yes. JMC focuses on brand strategy and digital services, while Jades Cam handles production and media.",
  },
];

function FAQSection() {
  return (
    <section className=" py-20 xl:py-24">
      <div className="container grid lg:grid-cols-[minmax(300px,420px)_1fr] gap-6 lg:gap-24">
        {/* Left */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-base">
            <SectionDots active={4} variant="normal" />
            <span>Questions about JMC</span>
          </div>

          <h2 className="">Frequently asked questions</h2>
        </div>

        {/* Right */}
        <div>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              defaultOpen={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
