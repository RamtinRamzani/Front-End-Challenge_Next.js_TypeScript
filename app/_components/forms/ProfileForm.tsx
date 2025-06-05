"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { formschema } from "./schema";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

type FormValues = z.infer<typeof formschema>;

export default function ProfileForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formschema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
      bio: "",
      check: true,
    },
  });

  function onSubmit(values: FormValues) {
    toast("You submitted the following values:", {
      description: (
        <pre className="text-sm whitespace-pre-wrap">
          {JSON.stringify(values, null, 2)}
        </pre>
      ),
      action: {
        label: "Undo",
        onClick: () => console.log(values),
      },
      duration: 5000,
      style: {
        background: "#4a5568",
        color: "#ffffff",
        border: "1px solid #2d3748",
      },
      icon: "✅",
    });
  }

  return (
    <div className="bg-gray-800 max-w-xl mx-auto flex flex-col items-center py-8 rounded-lg shadow-md mt-[clamp(10px,2vw,32px)] max-sm:max-w-xs">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-2 gap-x-4 gap-y-6">
            {/* USERNAME */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="max-sm:col-span-2">
                  <FormLabel className="text-gray-100">Username *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your username"
                      {...field}
                      className="text-white border border-gray-500 placeholder:text-gray-400"
                    />
                  </FormControl>
                  <FormDescription className="text-gray-300">
                    Please enter your username.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* PASSWORD */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="max-sm:col-span-2">
                  <FormLabel className="text-gray-100">Password *</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your last name"
                      {...field}
                      className="text-white border border-gray-500 placeholder:text-gray-400"
                    />
                  </FormControl>
                  <FormDescription className="text-gray-300">
                    Please enter your last name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* EMAIL ADDRESS */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel className="text-gray-100">
                    Email Address *
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="test@example.com"
                      {...field}
                      className="text-white border border-gray-500 placeholder:text-gray-400"
                    />
                  </FormControl>
                  <FormDescription className="text-gray-300">
                    Please enter your email address.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* BIO */}
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel className="text-gray-100">Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about yourself..."
                      className="min-h-[100px] resize-y text-white border border-gray-500 placeholder:text-gray-400"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-gray-300">
                    Write a short bio about yourself.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* TERMS AND CONDITIONS */}
            <FormField
              control={form.control}
              name="check"
              render={({ field }) => (
                <FormItem className="flex space-x-2 col-span-2 p-4 border border-primary-400 rounded-md shadow">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-gray-100">
                      Agree to the terms and conditions
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>

          <Button className="cursor-pointer hover:scale-105" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
