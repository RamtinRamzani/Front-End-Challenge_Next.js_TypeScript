import MortgageForm from "./MortgageForm";

function RepaymentForm() {
  return (
    <div className="w-full px-6 pt-6">
      <div className="flex justify-between">
        <h2 className="font-semibold text-xl">Morgage Calculate</h2>
        <button className="underline underline-offset-4 cursor-pointer hover:text-primary-200">
          clear all
        </button>
      </div>

      <MortgageForm />
    </div>
  );
}

export default RepaymentForm;
