"use client";

export default function Error({ error, reset }: { error: Error, reset: () => void }) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Oops! Something went wrong.</h1>
          <p className="text-gray-700 mb-6">{error.message}</p>
          <button
            onClick={() => reset()}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
}
