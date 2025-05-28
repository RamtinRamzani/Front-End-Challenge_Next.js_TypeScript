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
  price: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),

  years: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),

  rate: z.string().email({ message: "Invalid email address." }),

  type: z.string().optional(),
});
