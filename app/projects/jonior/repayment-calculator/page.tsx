"use client";

import RepaymentForm from "@/_components/forms/RepaymentForm";
import ShowResultRepayment from "@/_components/forms/ShowResultRepayment";
import { useState } from "react";

function Page() {
  const [monthlyRepayment, setMonthlyRepayment] = useState(0);
  const [totalRepayment, setTotalRepayment] = useState(0);

  function handleCalculate(monthly: number, total: number) {
    setMonthlyRepayment(monthly);
    setTotalRepayment(total);
  }

  return (
    <div className="sm:max-w-3xl max-sm:w-[clamp(300px,2vw,700px)] relative mx-auto mt-[clamp(10px,4vw,144px)] sm:border border-primary-700 rounded-md shadow-md flex max-sm:flex-col justify-between sm:gap-2 text-gray-50 mb-10">
      <RepaymentForm onCalculate={handleCalculate} />

      <ShowResultRepayment
        monthlyRepayment={monthlyRepayment}
        totalRepayment={totalRepayment}
      />
    </div>
  );
}

export default Page;
