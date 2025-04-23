"use client";
import clsx from "clsx";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import React from "react";
const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="py-7 border-b border-white/30">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold flex-1">{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <div
        className={clsx("mt-4", {
          hidden: !isOpen,
          "": isOpen === true,
        })}
      >
        {answer}
      </div>
    </div>
  );
};
const items = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
  },
];

export const FAQs = () => {
  return (
    <div className="bg-gradient-to-b from-[#5D2CA8] to-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center max-w-[648px] mx-auto font-bold text-5xl sm:text-6xl tracking-tighter">
          Frequently asked questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordionItem key={question} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
};
