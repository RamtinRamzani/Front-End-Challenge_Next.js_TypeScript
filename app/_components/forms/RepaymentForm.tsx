// "use client";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { zodResolver } from "@hookform/resolvers/zod";
// import Image from "next/image";
// import { useForm } from "react-hook-form";
// import { toast } from "sonner";

// import bg from "@/../public/images/jonior/icon-calculator.svg";
// import { mortgageFormschema } from "./schema";

// type FormValues = {
//   amount: string;
//   term: string;
//   rate: string;
//   type: "repayment" | "interest-only";
// };

// interface RepaymentFormProps {
//   onCalculate: (monthlyRepayment: number, totalRepayment: number) => void;
// }

// function RepaymentForm({ onCalculate }: RepaymentFormProps) {
//   const form = useForm<FormValues>({
//     resolver: zodResolver(mortgageFormschema),
//     defaultValues: {
//       amount: "300000",
//       term: "25",
//       rate: "5.25",
//       type: "repayment",
//     },
//   });

//   const { watch } = form;
//   const values = watch();

//   function calculateRepayments() {
//     const principal = Number(values.amount.toString().replace(/[^0-9.]/g, ""));
//     const annualRate = Number(values.rate);
//     const monthlyRate = annualRate / 100 / 12;
//     const numberOfPayments = Number(values.term) * 12;

//     let monthlyRepayment = 0;
//     let totalRepayment = 0;

//     if (values.type === "repayment") {
//       monthlyRepayment =
//         (principal *
//           monthlyRate *
//           Math.pow(1 + monthlyRate, numberOfPayments)) /
//         (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
//     } else {
//       monthlyRepayment = principal * monthlyRate;
//     }

//     totalRepayment = monthlyRepayment * numberOfPayments;

//     return {
//       monthlyRepayment: isNaN(monthlyRepayment) ? 0 : monthlyRepayment,
//       totalRepayment: isNaN(totalRepayment) ? 0 : totalRepayment,
//     };
//   }

//   function onSubmit(values: FormValues) {
//     const { monthlyRepayment, totalRepayment } = calculateRepayments();
//     onCalculate(monthlyRepayment, totalRepayment);

//     const numericAmount = Number(
//       values.amount.toString().replace(/[^0-9]/g, "")
//     );
//     toast("You submitted the following amount:", {
//       description: (
//         <pre className="text-[clamp(12px,2vw,14px)] whitespace-pre-wrap">
//           {`£${numericAmount.toLocaleString()}`}
//         </pre>
//       ),
//       duration: 5000,
//       style: {
//         background: "#4a5568",
//         color: "#ffffff",
//         border: "1px solid #2d3748",
//       },
//       icon: "✅",
//     });

//     console.log({ mortgageAmount: numericAmount });
//   }

//   const formatCurrency = (value: string) => {
//     const numericValue = value.replace(/[^0-9]/g, "");
//     return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   };

//   return (
//     <div className="w-full px-[clamp(8px,4vw,24px)] pt-[clamp(8px,4vw,24px)] border border-primary-700">
//       <div className="flex justify-between items-center">
//         <h2 className="font-semibold text-[clamp(16px,3vw,20px)]">
//           Mortgage Calculator
//         </h2>
//         <Button
//           variant="link"
//           onClick={() => {
//             form.reset({
//               amount: "0",
//               term: "0",
//               rate: "0",
//               type: "repayment",
//             });
//             onCalculate(0, 0);
//           }}
//           className="text-[clamp(12px,2vw,14px)] text-blue-500 underline underline-offset-4 hover:text-blue-600 transition-colors duration-300"
//         >
//           Clear All
//         </Button>
//       </div>

//       <div className="w-full max-w-[min(90vw,600px)] mx-auto my-[clamp(16px,3vw,32px)]">
//         <Form {...form}>
//           <form
//             onSubmit={form.handleSubmit(onSubmit)}
//             className="space-y-[clamp(16px,2vw,24px)]"
//           >
//             <div className="grid grid-cols-1 gap-[clamp(12px,2vw,16px)] sm:grid-cols-2">
//               <FormField
//                 control={form.control}
//                 name="amount"
//                 render={({ field }) => (
//                   <FormItem className="col-span-1 sm:col-span-2">
//                     <FormLabel className="text-[clamp(12px,2vw,14px)]">
//                       Mortgage Amount
//                     </FormLabel>
//                     <FormControl>
//                       <div className="relative">
//                         <span className="absolute left-0 top-1/2 transform -translate-y-1/2 px-[clamp(6px,1.5vw,8px)] text-[clamp(12px,2vw,14px)] text-primary-50 bg-primary-600 rounded-l-md h-full flex items-center">
//                           $
//                         </span>
//                         <Input
//                           {...field}
//                           value={formatCurrency(field.value?.toString() || "")}
//                           onChange={(e) => field.onChange(e.target.value)}
//                           placeholder="Enter amount"
//                           className="pl-[clamp(28px,6vw,36px)] text-[clamp(12px,2vw,14px)] rounded-md border border-gray-500 focus:border-blue-500 focus:ring-0"
//                         />
//                       </div>
//                     </FormControl>
//                     <FormMessage className="text-[clamp(10px,1.5vw,12px)]" />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="term"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className="text-[clamp(12px,2vw,14px)]">
//                       Mortgage Term
//                     </FormLabel>
//                     <FormControl>
//                       <div className="relative">
//                         <Input
//                           {...field}
//                           onChange={(e) => field.onChange(e.target.value)}
//                           placeholder="Years"
//                           className="pr-[clamp(48px,10vw,60px)] text-[clamp(12px,2vw,14px)] rounded-md border border-gray-500 focus:border-blue-500 focus:ring-0"
//                         />
//                         <span className="absolute right-0 top-1/2 transform -translate-y-1/2 px-[clamp(6px,1.5vw,8px)] text-[clamp(12px,2vw,14px)] text-primary-50 bg-primary-600 rounded-r-md h-full flex items-center">
//                           years
//                         </span>
//                       </div>
//                     </FormControl>
//                     <FormMessage className="text-[clamp(10px,1.5vw,12px)]" />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="rate"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className="text-[clamp(12px,2vw,14px)]">
//                       Interest Rate
//                     </FormLabel>
//                     <FormControl>
//                       <div className="relative">
//                         <Input
//                           {...field}
//                           placeholder="Rate"
//                           className="pr-[clamp(28px,6vw,36px)] text-[clamp(12px,2vw,14px)] rounded-md border border-gray-500 focus:border-blue-500 focus:ring-0"
//                         />
//                         <span className="absolute right-0 top-1/2 transform -translate-y-1/2 px-[clamp(6px,1.5vw,8px)] text-[clamp(12px,2vw,14px)] text-primary-50 bg-primary-600 rounded-r-md h-full flex items-center">
//                           %
//                         </span>
//                       </div>
//                     </FormControl>
//                     <FormMessage className="text-[clamp(10px,1.5vw,12px)]" />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="type"
//                 render={({ field }) => (
//                   <FormItem className="col-span-1 sm:col-span-2">
//                     <FormLabel className="text-[clamp(12px,2vw,14px)] mb-2">
//                       Mortgage Type
//                     </FormLabel>
//                     <FormControl>
//                       <RadioGroup
//                         onValueChange={field.onChange}
//                         defaultValue={field.value}
//                         className="flex flex-col gap-[clamp(8px,1.5vw,12px)]"
//                       >
//                         <FormItem className="flex items-center space-x-3 space-y-0">
//                           <FormControl>
//                             <RadioGroupItem value="repayment" />
//                           </FormControl>
//                           <FormLabel className="font-normal text-[clamp(12px,2vw,14px)]">
//                             Repayment
//                           </FormLabel>
//                         </FormItem>
//                         <FormItem className="flex items-center space-x-3 space-y-0">
//                           <FormControl>
//                             <RadioGroupItem value="interest-only" />
//                           </FormControl>
//                           <FormLabel className="font-normal text-[clamp(12px,2vw,14px)]">
//                             Interest Only
//                           </FormLabel>
//                         </FormItem>
//                       </RadioGroup>
//                     </FormControl>
//                     <FormMessage className="text-[clamp(10px,1.5vw,12px)]" />
//                   </FormItem>
//                 )}
//               />
//             </div>

//             <Button
//               className="flex items-center gap-[clamp(6px,1vw,8px)] bg-amber-500 text-primary-600 font-semibold hover:bg-amber-600 hover:text-primary-700 transition-colors duration-300 px-[clamp(12px,3vw,16px)] py-[clamp(6px,1.5vw,8px)] rounded-2xl mt-[clamp(16px,3vw,24px)] text-[clamp(12px,2vw,14px)]"
//               type="submit"
//             >
//               <Image
//                 src={bg}
//                 width={16}
//                 height={16}
//                 alt="calculate img"
//                 className="w-[clamp(12px,2vw,16px)] h-[clamp(12px,2vw,16px)]"
//               />
//               <span>Calculate Repayments</span>
//             </Button>
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// }

// export default RepaymentForm;
