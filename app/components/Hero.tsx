export default function Hero() {
  return (
    <section
      className="relative h-screen w-full pt-16 bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white px-4 flex flex-col items-center justify-center font-mono text-center"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 20px)",
      }}
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

      <pre className="text-green-400 text-sm md:text-base mb-4 select-none">
        <code>
          {`// Hi, I'm Peace — Full-Stack Developer\n// 5+ years crafting scalable apps\n\n`}
        </code>
      </pre>

      <h1 className="text-2xl md:text-3xl font-extrabold leading-snug mb-3">
        <span className="text-red-500">const </span>
        <span className="text-cyan-400">Peace</span>
        <span className="text-red-500"> = </span>
        <span className="text-yellow-400">{"{"}</span>
        <br />
        <span className="pl-6 block text-gray-300">
          role: <span className="text-green-400">'Full-Stack Developer'</span>,
        </span>
        <span className="pl-6 block text-gray-300">
          location: <span className="text-green-400">'South Africa'</span>,
        </span>
        <span className="pl-6 block text-gray-300">
          experience: <span className="text-green-400">5+</span>,
        </span>
        <span className="text-yellow-400">{"};"}</span>
        <span className="cursor text-white">|</span>
      </h1>

      <p className="mt-5 max-w-xl text-gray-300 text-xs md:text-sm">
        I build clean, scalable web applications with a focus on seamless user
        experiences and maintainable code. Skilled in React, Next.js, and
        Tailwind CSS on the frontend, alongside Node.js, Supabase, and Prisma
        for backend development. Experienced working with both SQL and NoSQL
        databases to design efficient, robust data models. Passionate about
        leveraging modern tools and best practices to deliver performant,
        reliable solutions that solve real problems and drive business value.
      </p>

      <button className="mt-8 px-5 py-1.5 text-sm bg-red-600 rounded-md font-semibold hover:bg-red-700 transition-colors duration-300">
        View My Work
      </button>

      <div className="absolute bottom-6 left-0 right-0 text-xs text-gray-600 select-none font-mono">
        &lt;/&gt; Crafted with passion and precision
      </div>
    </section>
  );
}
