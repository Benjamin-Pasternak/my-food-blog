'use client';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-gray-800 p-5">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-lg mb-6 text-center">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all">Go Home</a>
    </div>
  );
}
