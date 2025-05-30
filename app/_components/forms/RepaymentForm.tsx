"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import bg from "@/../public/images/jonior/icon-calculator.svg";
import { mortgageFormschema } from "./schema";

type FormValues = {
  amount: string;
  term: string;
  rate: string;
  type: "repayment" | "interest-only";
};

interface RepaymentFormProps {
  onCalculate: (monthlyRepayment: number, totalRepayment: number) => void;
}

function RepaymentForm({ onCalculate }: RepaymentFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(mortgageFormschema),
    defaultValues: {
      amount: "300000",
      term: "25",
      rate: "5.25",
      type: "repayment",
    },
  });

  const { watch } = form;
  const values = watch();

  function calculateRepayments() {
    const principal = Number(values.amount.toString().replace(/[^0-9.]/g, ""));
    const annualRate = Number(values.rate);
    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = Number(values.term) * 12;

    let monthlyRepayment = 0;
    let totalRepayment = 0;

    if (values.type === "repayment") {
      monthlyRepayment =
        (principal *
          monthlyRate *
          Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    } else {
      monthlyRepayment = principal * monthlyRate;
    }

    totalRepayment = monthlyRepayment * numberOfPayments;

    return {
      monthlyRepayment: isNaN(monthlyRepayment) ? 0 : monthlyRepayment,
      totalRepayment: isNaN(totalRepayment) ? 0 : totalRepayment,
    };
  }

  function onSubmit(values: FormValues) {
    const { monthlyRepayment, totalRepayment } = calculateRepayments();
    onCalculate(monthlyRepayment, totalRepayment);

    const numericAmount = Number(
      values.amount.toString().replace(/[^0-9]/g, "")
    );
    toast("You submitted the following amount:", {
      description: (
        <pre className="text-sm whitespace-pre-wrap">
          {`£${numericAmount.toLocaleString()}`}
        </pre>
      ),
      duration: 5000,
      style: {
        background: "#4a5568",
        color: "#ffffff",
        border: "1px solid #2d3748",
      },
      icon: "✅",
    });

    console.log({ mortgageAmount: numericAmount });
  }

  const formatCurrency = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="w-full px-6 pt-6">
      <div className="flex justify-between">
        <h2 className="font-semibold text-xl">Morgage Calculate</h2>
        <Button
          variant="link"
          onClick={() => {
            form.reset({
              amount: "0",
              term: "0",
              rate: "0",
              type: "repayment",
            });
            onCalculate(0, 0);
          }}
          className="text-blue-500 underline underline-offset-4 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
        >
          Clear All
        </Button>
      </div>

      <div className="max-w-md mx-auto my-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Mortgage Amount</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="flex justify-center items-center absolute left-0 top-1/2 transform -translate-y-1/2 px-2 text-primary-50  h-full bg-primary-600 rounded-l-md">
                          $
                        </span>
                        <Input
                          {...field}
                          value={formatCurrency(field.value?.toString() || "")}
                          onChange={(e) => field.onChange(e.target.value)}
                          placeholder="Enter amount"
                          className="pl-10 rounded-md border border-gray-500 focus:border-blue-500 focus:ring-0"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="term"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Mortgage Term</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          onChange={(e) => field.onChange(e.target.value)}
                          placeholder="Years"
                          className="rounded-md border border-gray-500 focus:border-blue-500 focus:ring-0"
                        />
                        <span className="flex justify-center items-center absolute right-0 top-1/2 transform -translate-y-1/2 px-2 text-primary-50  h-full bg-primary-600 rounded-r-md">
                          years
                        </span>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="rate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Interest Rate</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          placeholder="Rate"
                          className="rounded-md border border-gray-500 focus:border-blue-500 focus:ring-0"
                        />
                        <span className="flex justify-center items-center absolute right-0 top-1/2 transform -translate-y-1/2 px-2 text-primary-50  h-full border-r border-primary-400 bg-primary-600 rounded-r-md">
                          %
                        </span>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel className="mb-2">Mortgage Type</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-2"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="repayment" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Repayment
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="interest-only" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Interest Only
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              className="flex gap-2 bg-amber-500 text-primary-600 font-semibold cursor-pointer hover:bg-amber-600 hover:text-primary-700 transition-colors duration-300 px-4 py-2 rounded-2xl mt-10"
              type="submit"
            >
              <Image src={bg} width={16} height={16} alt="calculate img" />
              <span>Calculate Repayments</span>
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default RepaymentForm;
