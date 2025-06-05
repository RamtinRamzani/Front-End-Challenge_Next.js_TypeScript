// import { Josefin_Sans } from "next/font/google";
import { ReactNode } from "react";
import "./_styles/globals.css";
import Header from "./_components/Header";
import { Toaster } from "@/components/ui/sonner";

// const josefin = Josefin_Sans({
//   subsets: ["latin"],
//   display: "swap",
// });

export const metadata = {
  title: {
    template: "%s / Ramtin Projects",
    default: "Welcome / My Challenge Projects",
  },

  description: "These are my projects to develop a plan for my self-assessment",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen flex flex-col relative bg-gray-900`}
      >
        <header className="bg-gray-800">
          <Header />
        </header>

        <main className="flex-1">
          <div className="w-full mx-auto">
            {children}
            <Toaster />
          </div>
        </main>

        <footer className="relative z-1 text-white text-2xl text-center bg-gray-800">
          Footer
        </footer>
      </body>
    </html>
  );
}
