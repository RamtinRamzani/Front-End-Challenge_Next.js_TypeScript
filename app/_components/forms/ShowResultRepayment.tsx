import Image from "next/image";
import React from "react";

import bg from "@/../public/images/jonior/illustration-empty.svg";

interface ShowResultRepaymentProps {
  monthlyRepayment: number;
  totalRepayment: number;
}

function ShowResultRepayment({
  monthlyRepayment,
  totalRepayment,
}: ShowResultRepaymentProps) {
  const hasResults = monthlyRepayment > 0 && totalRepayment > 0;

  return (
    <div className="w-full relative bg-primary-800 rounded-bl-[50px] px-6 py-12 sm:rounded-r-md">
      {hasResults ? (
        <>
          <h2 className="text-xl font-semibold">Your results</h2>
          <p className="text-sm mt-2 mb-4">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click &quot;calculate
            repayments&quot; again.
          </p>
          <div className="bg-[#2a4b44] p-4 rounded-md">
            <h3 className="text-lg">Your monthly repayments</h3>
            <p className="text-3xl font-bold mt-2">
              £
              {monthlyRepayment
                .toFixed(2)
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg">Total you&apos;ll repay over the term</h3>
            <p className="text-2xl font-bold mt-2">
              £{totalRepayment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          </div>
        </>
      ) : (
        <div className="flex justify-center mt-14 items-center flex-col gap-y-3">
          <Image src={bg} width={120} height={120} quality={100} alt="test" />
          <span className="font-semibold text-lg text-white">
            Results shown here
          </span>
          <span className="text-sm text-center text-primary-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            ratione.
          </span>
        </div>
      )}
    </div>
  );
}

export default ShowResultRepayment;
