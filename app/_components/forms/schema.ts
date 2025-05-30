import { z } from "zod";

export const formschema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),

  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),

  email: z.string().email({ message: "Invalid email address." }),

  bio: z.string().optional(),

  check: z.boolean().default(false).optional(),
});

export const mortgageFormschema = z.object({
  amount: z
    .string()
    .min(1, { message: "Please enter a mortgage amount." })
    .refine((val) => !isNaN(Number(val.replace(/[^0-9]/g, ""))), {
      message: "Please enter a valid number for the mortgage amount.",
    })
    .transform((val) => Number(val.replace(/[^0-9]/g, "")))
    .refine((val) => val > 0, {
      message: "Mortgage amount must be greater than 0.",
    }),

  term: z
    .string()
    .min(1, { message: "Please specify the payment term." })
    .refine((val) => !isNaN(Number(val)), {
      message: "Payment term must be a valid number.",
    })
    .transform((val) => Number(val))
    .refine((val) => val > 0, {
      message: "Payment term must be greater than 0.",
    })
    .refine((val) => Number.isInteger(val), {
      message: "Payment term must be a whole number.",
    }),

  rate: z
    .string()
    .min(1, { message: "Please insert an interest rate." })
    .refine((val) => !isNaN(Number(val)), {
      message: "Interest rate must be a valid number.",
    })
    .transform((val) => Number(val) / 100)
    .refine((val) => val >= 0, {
      message: "Interest rate cannot be negative.",
    }),

  type: z.enum(["repayment", "interest-only"], {
    required_error: "Please select a mortgage type.",
    invalid_type_error:
      "Mortgage type must be either 'Repayment' or 'Interest Only'.",
  }),
});
