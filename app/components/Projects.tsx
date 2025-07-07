export default function Projects() {
  return (
    <section
      id="projects"
      className="h-screen w-full overflow-y-auto scroll-smooth bg-gradient-to-b from-black via-zinc-900 to-black text-white pt-24 pb-16 px-6 flex flex-col items-center"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-100 text-transparent bg-clip-text drop-shadow">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Project 1 */}
        <a
          href="https://mobiza.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-800 hover:bg-zinc-700 transition p-6 rounded-lg shadow-lg border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-2">Mobiza Rides</h3>
          <p className="text-gray-300 mb-3">
            A full-stack delivery bike rental platform with real payment
            integration, business logic, and weekly rental flows.
          </p>
          <ul className="text-sm text-gray-400 list-disc pl-5 space-y-1">
            <li>Next.js App Router</li>
            <li>Supabase backend</li>
            <li>Tailwind CSS design system</li>
            <li>PayFast integration</li>
            <li>Hosted on Vercel</li>
          </ul>
        </a>

        {/* Project 2 */}
        <a
          href="https://dietitianlufuno.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-800 hover:bg-zinc-700 transition p-6 rounded-lg shadow-lg border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            Dietitian Lufuno
          </h3>
          <p className="text-gray-300 mb-3">
            A professional portfolio site for a dietitian with booking and
            services. Fast, responsive and client-ready.
          </p>
          <ul className="text-sm text-gray-400 list-disc pl-5 space-y-1">
            <li>Next.js App Router</li>
            <li>Responsive mobile-first design</li>
            <li>Tailwind CSS UI</li>
            <li>Deployed on Vercel</li>
          </ul>
        </a>
      </div>

      <p className="mt-12 text-sm text-gray-500 text-center max-w-xl">
        All projects are fully deployed on{" "}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 underline hover:text-red-400"
        >
          Vercel
        </a>{" "}
        for optimal performance and global reach.
      </p>
    </section>
  );
}
