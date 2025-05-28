"use client";

import { useState } from "react";
import DateBox from "../../../_components/DateBox";
import ShowDate from "../../../_components/ShowDate";
import Image from "next/image";

function Page() {
  const dateBox = [
    { title: "day", number: "DD" },
    { title: "month", number: "MM" },
    { title: "year", number: "YYYY" },
  ];

  // State for input values and display toggle
  const [dateInput, setDateInput] = useState({ day: "", month: "", year: "" });
  const [showResult, setShowResult] = useState(false);

  const handleInputChange = (title: string, value: string) => {
    setDateInput((prev) => ({
      ...prev,
      [title.toLowerCase()]: value,
    }));
    setShowResult(false); // Hide result when input changes
  };

  // Handle button click to show age
  const handleCalculate = () => {
    setShowResult(true);
  };

  // Calculate age for ShowDate
  const calculateAge = () => {
    const { day, month, year } = dateInput;
    const birthDate = new Date(`${year}-${month}-${day}`);
    const today = new Date();

    if (isNaN(birthDate.getTime()) || birthDate > today) {
      return null; // Invalid or future date
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    return [
      { title: "years", number: years },
      { title: "months", number: months },
      { title: "days", number: days },
    ];
  };

  // Initial placeholder for ShowDate
  const initialShowDate = [
    { title: "years", number: "--" },
    { title: "months", number: "--" },
    { title: "days", number: "--" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col sm:w-1/2 bg-gray-50 p-6 sm:p-10 mx-[clamp(1rem,4vw,4rem)] rounded-2xl rounded-br-[120px] shadow-sm">
        <DateBox dateBox={dateBox} onInputChange={handleInputChange} />
        <div
          onClick={handleCalculate}
          className="self-center relative bottom-7 flex justify-center items-center bg-black rounded-full w-[clamp(3rem,4vw,4rem)] h-[clamp(3rem,4vw,4rem)] cursor-pointer hover:bg-blue-700"
        >
          <Image
            width={32}
            height={32}
            src="/images/jonior/icon-arrow.svg"
            className="text-sm"
            alt="buttom arrow"
          />
        </div>
        <ShowDate
          showDate={showResult ? calculateAge() || [] : initialShowDate}
        />
      </div>
    </div>
  );
}

export default Page;
