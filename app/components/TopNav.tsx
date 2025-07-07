"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

type NavItem = {
  id: string;
  label: string;
};

const navItems: NavItem[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

type TopNavProps = {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
};

export default function TopNav({ currentIndex, setCurrentIndex }: TopNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
    setMenuOpen(false); // Close mobile nav
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md shadow-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <span className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-gray-200 via-gray-400 to-gray-100 text-transparent bg-clip-text drop-shadow">
            Dev Peace
          </span>

          {/* Hamburger (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ label }, i) => (
              <li key={label}>
                <button
                  onClick={() => handleClick(i)}
                  className={`text-lg font-semibold ${
                    i === currentIndex
                      ? "text-red-500"
                      : "text-white hover:text-red-400"
                  } transition duration-300`}
                >
                  {i === currentIndex ? `<${label}/>` : label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 flex flex-col justify-center items-center space-y-6 text-white text-2xl font-semibold">
          {navItems.map(({ label }, i) => (
            <button
              key={label}
              onClick={() => handleClick(i)}
              className={`w-full text-center py-4 ${
                i === currentIndex
                  ? "text-red-500"
                  : "text-white hover:text-red-400"
              } border-t border-white/20`}
            >
              {i === currentIndex ? `<${label}/>` : label}
            </button>
          ))}
          {/* Bottom Divider */}
          <div className="w-full border-t border-white/20 mt-4" />
        </div>
      )}
    </>
  );
}
