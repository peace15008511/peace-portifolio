import { JSX } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiSupabase,
  SiFirebase,
  SiPrisma,
  SiVercel,
  SiGithub,
  SiDocker,
  SiPostman,
  SiFigma,
  SiNotion,
  SiJest,
  SiGithubactions,
} from "react-icons/si";

const skillIcons: Record<string, JSX.Element> = {
  React: <SiReact />,
  "Next.js": <SiNextdotjs />,
  "Tailwind CSS": <SiTailwindcss />,
  TypeScript: <SiTypescript />,
  "Node.js": <SiNodedotjs />,
  Supabase: <SiSupabase />,
  Firebase: <SiFirebase />,
  Prisma: <SiPrisma />,
  Vercel: <SiVercel />,
  GitHub: <SiGithub />,
  "CI/CD": <SiGithubactions />,
  "Docker (basic)": <SiDocker />,
  Postman: <SiPostman />,
  Figma: <SiFigma />,
  Notion: <SiNotion />,
  "Testing (Jest)": <SiJest />,
};

export default function Skills() {
  const skills = {
    Frontend: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    Backend: ["Node.js", "Supabase", "Firebase", "Prisma"],
    DevOps: ["Vercel", "GitHub", "CI/CD", "Docker (basic)"],
    Tools: ["VSCode", "Postman", "Figma", "Notion"],
  };

  return (
    <div className="w-full max-w-5xl px-2 md:px-4">
      <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-gray-200 via-gray-400 to-gray-100 text-transparent bg-clip-text drop-shadow">
        Skills & Tools
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h4 className="text-xl font-semibold text-gray-200 mb-4">
              {category}
            </h4>
            <ul className="grid grid-cols-2 gap-3">
              {items.map((skill) => (
                <li
                  key={skill}
                  className="bg-zinc-800 border border-white/10 rounded-md px-4 py-2 flex items-center gap-3 text-sm text-gray-300 hover:bg-zinc-700 transition"
                >
                  <span className="text-red-500 text-xl">
                    {skillIcons[skill] || null}
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
