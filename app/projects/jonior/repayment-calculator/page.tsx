import bg from "@/../public/images/jonior/illustration-empty.svg";
import RepaymentForm from "@/_components/forms/RepaymentForm";
import Image from "next/image";

function Page() {
  return (
    <div className="max-w-3xl relative mx-auto mt-36 bg-primary-700 rounded-md shadow-md flex justify-between gap-2 text-gray-50">
      <RepaymentForm />

      <div className="w-full relative bg-primary-800 rounded-bl-[50px] px-6 py-12 rounded-r-md">
        <div className="flex justify-center items-center flex-col gap-y-3">
          <Image src={bg} width={120} height={120} quality={100} alt="test" />
          <span className="font-semibold text-lg text-white">
            Results shown here
          </span>
          <span className="text-sm text-center text-primary-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            ratione.
          </span>

          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            dolorum fugiat reiciendis impedit nemo in ex, quas maiores commodi
            minus?
          </span>
        </div>
      </div>
    </div>
  );
}

export default Page;
