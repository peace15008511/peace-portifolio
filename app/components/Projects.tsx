"use client";

type Project = {
  title: string;
  description: string;
  href: string;
};

const projects: Project[] = [
  {
    title: "Mobiza Rides",
    description:
      "Delivery bike rental platform with real payments and business logic.",
    href: "https://mobiza-rides.vercel.app/",
  },
  {
    title: "Dietitian Lufuno",
    description:
      "Professional portfolio site for a dietitian with booking features.",
    href: "https://dietatian-web.vercel.app/",
  },
  {
    title: "Fashion School",
    description:
      "Elegant promotional website for a creative fashion training academy.",
    href: "https://fashion-school.vercel.app",
  },
];

// Define a small array of distinct background colors for cards
const bgColors = [
  "bg-zinc-900",
  "bg-gray-800",
  "bg-neutral-900",
  "bg-zinc-800",
  "bg-gray-900",
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative h-screen w-full overflow-y-auto scroll-smooth text-white pt-24 pb-16 px-6 flex flex-col items-center"
    >
      {/* ✨ Metallic background animation */}
      <style>
        {`
          .metallic-bg::before {
            content: "";
            position: absolute;
            inset: 0;
            z-index: -1;
            background: linear-gradient(
              135deg,
              #1f1f1f 0%,
              #2e2e2e 15%,
              #3c3c3c 30%,
              #4b4b4b 45%,
              #606060 60%,
              #4b4b4b 75%,
              #3c3c3c 90%,
              #1f1f1f 100%
            );
            background-size: 400% 400%;
            animation: metallicShift 30s ease infinite;
            opacity: 1;
          }

          @keyframes metallicShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <div className="metallic-bg absolute inset-0 -z-10" />

      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-slate-100 via-gray-300 to-slate-100 text-transparent bg-clip-text drop-shadow-md">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {projects.map(({ title, description, href }, index) => (
          <a
            key={title}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              bgColors[index % bgColors.length]
            } hover:brightness-110 transition p-4 rounded-md shadow-md border border-gray-600/30 backdrop-blur-sm flex flex-col justify-between`}
          >
            <div>
              <h3 className="text-lg font-semibold text-slate-100 mb-1">
                {title}
              </h3>
              <p className="text-sm text-gray-300">{description}</p>
            </div>
            <span className="mt-4 text-xs text-sky-400 hover:underline">
              Click to preview →
            </span>
          </a>
        ))}
      </div>

      <p className="mt-12 text-sm text-gray-400 text-center max-w-xl">
        All projects are fully deployed on{" "}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 underline hover:text-sky-300"
        >
          Vercel
        </a>
        .
      </p>
    </section>
  );
}
