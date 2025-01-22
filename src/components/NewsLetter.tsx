import React from "react";

const Newsletter: React.FC = () => {
  return (
    <section className="bg-gray-200 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Join Our Newsletter
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed">
          Stay updated with the latest recipes, tips, and culinary inspiration delivered straight to your inbox.
        </p>

        {/* Form */}
        <form className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-2 rounded-full text-gray-800 border border-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
          />
          <button
            type="submit"
            className="bg-gray-800 text-white font-medium px-6 py-2 rounded-full shadow-md hover:bg-gray-700 transition duration-200"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
