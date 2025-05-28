"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import bg from "../../../public/images/jonior/icon-calculator.svg";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const formSchema = z.object({
  mortgageAmount: z
    .string()
    .refine((val) => !isNaN(Number(val.replace(/[^0-9]/g, ""))), {
      message: "Please enter a valid number",
    }),
});

type FormValues = z.infer<typeof formSchema>;

export default function MortgageForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mortgageAmount: "300,000",
    },
  });

  function onSubmit(values: FormValues) {
    const numericAmount = Number(values.mortgageAmount.replace(/[^0-9]/g, ""));
    toast("You submitted the following amount:", {
      description: (
        <pre className="text-sm whitespace-pre-wrap">
          {`£${numericAmount.toLocaleString()}`}
        </pre>
      ),
      duration: 5000,
      style: {
        background: "#2dd4bf",
        color: "#ffffff",
        border: "1px solid #14b8a6",
      },
    });

    console.log({ mortgageAmount: numericAmount });
  }
  // Format input value with commas
  const formatCurrency = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Add commas
  };

  return (
    <div className="max-w-md mx-auto my-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="mortgageAmount"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Mortgage Amount</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="flex justify-center items-center absolute left-1 top-1/2 transform -translate-y-1/2 px-2 text-primary-50  h-full border-r border-primary-400">
                        $
                      </span>
                      <Input
                        {...field}
                        value={formatCurrency(field.value || "")}
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
              name="mortgageAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mortgage Amount</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="flex justify-center items-center absolute left-1 top-1/2 transform -translate-y-1/2 px-2 text-primary-50  h-full border-r border-primary-400">
                        $
                      </span>
                      <Input
                        {...field}
                        value={formatCurrency(field.value || "")}
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
              name="mortgageAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mortgage Amount</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="flex justify-center items-center absolute left-1 top-1/2 transform -translate-y-1/2 px-2 text-primary-50  h-full border-r border-primary-400">
                        $
                      </span>
                      <Input
                        {...field}
                        value={formatCurrency(field.value || "")}
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
              name="mortgageAmount"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel className="mb-2">Mortgage Type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="all" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          All new messages
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="mentions" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Direct messages and mentions
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
  );
}
