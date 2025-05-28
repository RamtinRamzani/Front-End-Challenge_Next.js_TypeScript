"use client";

import Image from "next/image";
import { useState } from "react";

function Page() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "What is JavaScript?",
      answer:
        "JavaScript (often abbreviated as JS) is a high-level, versatile, and widely-used programming language primarily known for its role in web development. It enables interactive and dynamic behavior on websites.",
    },
    {
      id: 2,
      question: "What are Scopes in JavaScript?",
      answer:
        "A scope is a set of variables, objects, and functions that you have access to. There are three types of scopes in JavaScript. Which are Global Scope, Function Scope (Local Scope), and Block Scope.",
    },
    {
      id: 3,
      question: "What is ternary operator in JavaScript?",
      answer:
        "The ternary operator is a conditional operator that takes three operands. It is frequently used as a shortcut for the if statement.",
    },
  ];

  const toggleQuestion = (id: number) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="w-full min-h-screen bg-gray-200 relative flex items-center justify-center p-4 font-[sans]">
      <Image
        width={1920}
        height={1080}
        src="/images/jonior/background-pattern-desktop.svg"
        className="w-full h-full absolute top-0 left-0 object-cover z-0"
        alt="Background Pattern"
      />

      <div className="relative bg-white p-6 sm:p-8 gap-4 w-full max-w-3xl rounded-xl flex flex-col shadow-2xl">
        <div className="flex items-center gap-4">
          <Image
            src="/images/jonior/icon-star.svg"
            alt="Star Icon"
            width={32}
            height={32}
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            FAQs
          </h2>
        </div>

        <div className="max-h-[500px] overflow-y-auto">
          {faqs.map((item) => {
            const isOpen = activeId === item.id;

            return (
              <div
                className="flex flex-col gap-3 border-b py-4 sm:py-6"
                key={item.id}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleQuestion(item.id)}
                >
                  <p className="text-gray-800 font-semibold text-sm sm:text-base md:text-lg pr-4">
                    {item.question}
                  </p>
                  <Image
                    src={
                      isOpen
                        ? "/images/jonior/icon-minus.svg"
                        : "/images/jonior/icon-plus.svg"
                    }
                    alt={isOpen ? "Collapse" : "Expand"}
                    width={32}
                    height={32}
                    className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0"
                  />
                </div>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden px-2 text-gray-600 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="py-2 text-xs sm:text-base">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Page;
