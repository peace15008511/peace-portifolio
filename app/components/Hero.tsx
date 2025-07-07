export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen w-full flex flex-col items-center justify-center bg-black text-white px-4 md:px-6 text-center relative"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-zinc-900/80 pointer-events-none" />

      {/* Main Content */}
      <div className="z-10 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-snug sm:leading-tight">
          Hi, I'm <span className="text-red-500">Peace Mulalo</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-4 sm:mb-6">
          Full-Stack Developer • Freelancer • Problem Solver
        </p>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 sm:mb-10 px-2 sm:px-0">
          I design, build, and scale modern web applications using technologies
          like Next.js, Tailwind CSS, and Supabase. Passionate about clean code,
          great UX, and building solutions that matter.
        </p>

        <button className="bg-white text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-semibold hover:bg-red-600 hover:text-white transition duration-300">
          View My Work
        </button>
      </div>

      {/* Footer Info */}
      <div className="absolute bottom-4 sm:bottom-6 text-xs sm:text-sm text-gray-600 z-10">
        Based in South Africa • Open to remote opportunities
      </div>
    </section>
  );
}
