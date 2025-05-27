import Image from "next/image";
import Link from "next/link";

import bg from "../public/ramtin1.jpg";

export default function Page() {
  return (
    <main className="mt-32 flex flex-col border border-white">
      <Image
        src={bg}
        placeholder="blur"
        quality={80}
        fill
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative text-center">
        <h1 className="mb-10 font-normal tracking-tight text-7xl text-primary-50">
          Welcome to My Personal Website.
        </h1>
        <Link
          href="/projects"
          className="px-8 py-6 text-lg font-semibold transition-all bg-accent-500 text-primary-300 hover:bg-primary-800"
        >
          Explore My Projects
        </Link>
      </div>
    </main>
  );
}
