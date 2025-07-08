"use client";

import Image from "next/image";

export default function Hero({ goToProjects }: { goToProjects: () => void }) {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-y-auto scroll-smooth text-white pt-24 pb-16 px-6 flex flex-col items-center"
    >
      <style>
        {`
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
          .cursor {
            animation: blink 1.2s step-start infinite;
          }
        `}
      </style>

      {/* Optional animated background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0a0a0a] via-black to-[#1a1a1a]" />

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl w-full">
        {/* Left: Image and Text */}
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl">
            <Image
              src="/images/peace_color.jpg"
              alt="Peace Mulalo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold text-gray-100">
              Peace Mulovhedzi
            </h2>
            <p className="text-sm text-gray-400">
              Full-Stack Developer • Problem Solver
            </p>
          </div>
        </div>

        {/* Right: Editor-like Card */}
        <div className="w-full max-w-xl bg-zinc-900 rounded-xl shadow-lg border border-white/10 font-mono p-6 text-sm relative overflow-x-auto">
          <div className="flex space-x-2 mb-4">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>

          <pre className="text-[13px] whitespace-pre-wrap">
            <code className="select-none">
              <span className="text-yellow-300">
                // Hi, I'm Peace — Full-Stack Developer
              </span>
              {"\n"}
              <span className="text-yellow-300">
                // 5+ years crafting scalable apps
              </span>
              {"\n\n"}

              <span className="text-red-400">const </span>
              <span className="text-blue-400">Peace</span>
              <span className="text-white"> = </span>
              <span className="text-orange-400">{"{"}</span>
              {"\n"}
              <span className="pl-4 text-white">
                role:{" "}
                <span className="text-blue-400">'Full-Stack Developer'</span>,
              </span>
              {"\n"}
              <span className="pl-4 text-white">
                location: <span className="text-blue-400">'South Africa'</span>,
              </span>
              {"\n"}
              <span className="pl-4 text-white">
                experience: <span className="text-blue-400">'5+ years'</span>,
              </span>
              {"\n"}
              <span className="text-orange-400">{"};"}</span>
              <span className="cursor text-white">|</span>
              {"\n\n"}

              <span className="text-gray-400">
                /** I am a dedicated and passionate full-stack developer who
                believes in building software that not only works flawlessly but
                also delivers meaningful experiences. With a strong commitment
                to quality and continuous growth, I approach every project with
                curiosity, creativity, and resilience. I thrive in collaborative
                teams, enjoy solving complex problems, and am driven by a desire
                to turn ideas into impactful, scalable solutions that make a
                difference. */
              </span>
            </code>
          </pre>

          <button
            onClick={goToProjects}
            className="mt-6 px-5 py-2 text-sm bg-gradient-to-tr from-red-600 via-pink-600 to-red-700 rounded-md font-semibold hover:scale-105 transition duration-300 shadow-md"
          >
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
}
