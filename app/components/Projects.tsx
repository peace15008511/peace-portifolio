"use client";

type Project = {
  title: string;
  description: string;
  href: string;
  tech: string[];
};

const projects: Project[] = [
  {
    title: "Mobiza Rides",
    description:
      "A full-stack delivery bike rental platform with real payment integration, business logic, and weekly rental flows.",
    href: "https://mobiza-rides.vercel.app/",
    tech: [
      "Next.js App Router",
      "Supabase backend",
      "Tailwind CSS design system",
      "PayFast integration",
      "Hosted on Vercel",
    ],
  },
  {
    title: "Dietitian Lufuno",
    description:
      "A professional portfolio site for a dietitian with booking and services. Fast, responsive and client-ready.",
    href: "https://dietatian-web.vercel.app/",
    tech: [
      "Next.js App Router",
      "Responsive mobile-first design",
      "Tailwind CSS UI",
      "Deployed on Vercel",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative h-screen w-full overflow-y-auto scroll-smooth text-white pt-24 pb-16 px-6 flex flex-col items-center"
    >
      {/* ✨ Custom Background Gradient + Metallic Overlay */}
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {projects.map(({ title, description, href, tech }) => (
          <a
            key={title}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 hover:bg-zinc-800 transition p-6 rounded-lg shadow-lg border border-gray-600/30 backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold text-slate-100 mb-2">{title}</h3>
            <p className="text-gray-300 mb-3">{description}</p>
            <ul className="text-sm text-gray-400 list-disc pl-5 space-y-1">
              {tech.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
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
        </a>{" "}
        for optimal performance and global reach.
      </p>
    </section>
  );
}
