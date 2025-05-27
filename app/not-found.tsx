import Link from "next/link";

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <main className="space-y-6 text-center p-6 rounded">
        <h2 className="text-4xl text-primary-100 font-semibold">
          This page could not be found :(
        </h2>
        <Link
          href="/"
          className="inline-block px-6 py-3 text-lg text-primary-100 bg-primary-500 hover:bg-primary-400  rounded transition-colors duration-200 shadow-md"
        >
          Go back home
        </Link>
      </main>
    </div>
  );
}

export default NotFound;
