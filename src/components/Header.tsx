"use client";

import React, { useState } from "react";
import Link from "next/link";

interface NavLink {
  title: string;
  href: string;
}

interface HeaderProps {
  logoSrc?: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc = "/images/logo.svg" }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks: NavLink[] = [
    { title: "Home", href: "/" },
    { title: "Recipes", href: "/recipes" },
    { title: "About", href: "/about" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className="bg-white shadow">
      <div className="flex items-center py-4 px-8">

        {/* Left: Logo and Title */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <img src={logoSrc} alt="Site Logo" className="h-12 w-auto" />
          </Link>
          <Link
            href="/"
            className="text-3xl font-bold text-red-600 transition-colors duration-200 hover:text-red-800"
          >
            Jack&apos;s Kitchen
          </Link>
        </div>

        {/* Center: Nav Links */}
        <nav className="flex-1 flex justify-center">
          <ul className="flex space-x-6 text-lg font-semibold">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-red-600 hover:text-red-800 transition-colors duration-200"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Search Bar */}
        <form onSubmit={handleSearch} className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 rounded-full px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-red-600 transition-colors"
          />
          <button
            type="submit"
            className="p-2 rounded-full bg-red-600 hover:bg-red-700 text-white transition-colors duration-200"
            aria-label="Search"
          >
            {/* Magnifying Glass Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="w-4 h-4"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5a6 6 0 100 12 6 6 0 000-12zM21 21l-4.35-4.35"
              />
            </svg>
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
