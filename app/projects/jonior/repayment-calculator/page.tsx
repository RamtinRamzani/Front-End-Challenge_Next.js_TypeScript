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
    <div className="max-w-3xl relative mx-auto mt-36 bg-primary-700 rounded-md shadow-md flex justify-between gap-2 text-gray-50">
      <RepaymentForm onCalculate={handleCalculate} />

      <ShowResultRepayment
        monthlyRepayment={monthlyRepayment}
        totalRepayment={totalRepayment}
      />
    </div>
  );
}

export default Page;
