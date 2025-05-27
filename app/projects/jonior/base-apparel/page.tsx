import Image from "next/image";

function Page() {
  return (
    <section className="flex flex-col-reverse md:flex-row mx-auto gap-[clamp(1rem,4vw,4rem)] bg-primary-100 min-h-screen">
      <div className="flex flex-col md:pl-16 lg:pl-20 px-4 md:w-1/2 lg:w-3/5 py-8">
        {/* Title */}
        <h2 className="uppercase text-[clamp(2rem,5vw,4rem)] font-semibold flex flex-col mt-8 md:mt-16 max-md:text-center tracking-[clamp(0.5rem,1vw,0.75rem)] leading-tight">
          <span className="text-gray-400 font-medium">we&apos;re</span>
          <span className="text-gray-800">coming</span>
          <span className="text-gray-800">soon.</span>
        </h2>

        {/* Description */}
        <p className="mt-6 md:mt-10 p-2 max-md:text-center text-gray-400 tracking-wide font-[Josefin] line-clamp-4">
          Hello flow shapers! We&apos;re currently building our new fashion
          store. Add your email below to stay up-to-date with announcements and
          our launch deals.
        </p>

        {/* Email Form */}
        <div className="flex items-center bg-white rounded-full border border-pink-200 shadow-md w-full max-w-md p-1 pl-4 mt-6 max-md:mb-8">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-grow bg-transparent outline-none text-pink-600 placeholder-pink-300/70 focus:ring-2 focus:ring-pink-300"
          />
          <button className="bg-gradient-to-r from-pink-300 to-pink-700 text-white rounded-full w-16 h-10 flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-200">
            <span className="text-lg">&gt;</span>
          </button>
        </div>
      </div>

      <div className="md:w-1/2 lg:w-2/5">
        <Image
          src="/images/jonior/hero-desktop.jpg"
          width={800}
          height={600}
          alt="Hero Photo"
          className="w-full h-[400px] md:h-full object-cover"
        />
      </div>
    </section>
  );
}

export default Page;
