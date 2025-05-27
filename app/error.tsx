"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <main className="space-y-6 text-center p-6 rounded">
        <h2 className="text-4xl text-primary-100 font-semibold">
          Something went wrong!
        </h2>
        <p className="text-lg text-primary-100">{error.message}</p>

        <button
          type="button"
          className="inline-block px-6 py-3 text-lg text-primary-100 bg-primary-500 hover:bg-primary-400  rounded transition-colors duration-200 shadow-md"
          onClick={reset}
        >
          Try again
        </button>
      </main>
    </div>
  );
}
