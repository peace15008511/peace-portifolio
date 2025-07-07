"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { ArrowLeft, ArrowRight } from "lucide-react";
import TopNav from "@/components/TopNav";

const sections = [<Hero />, <About />, <Projects />, <Contact />];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex < sections.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative h-screen overflow-hidden bg-black text-white">
      {/* Top Navigation with section control */}
      <TopNav currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />

      {/* Section Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out w-full h-full"
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        {sections.map((Component, i) => (
          <div key={i} className="w-screen h-screen flex-shrink-0">
            {Component}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {currentIndex > 0 && (
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white text-black p-2 rounded-full hover:bg-gray-300 transition"
        >
          <ArrowLeft size={24} />
        </button>
      )}
      {currentIndex < sections.length - 1 && (
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-white text-black p-2 rounded-full hover:bg-gray-300 transition"
        >
          <ArrowRight size={24} />
        </button>
      )}
    </div>
  );
}
