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
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiGraphql,
  SiRedux,
  SiSpringboot,
  SiGin,
  SiGoland,
  SiGithubactions,
  SiJenkins,
  SiRedis,
} from "react-icons/si";
import { FaAws, FaLinux, FaGitAlt, FaJava, FaJsSquare } from "react-icons/fa";

const skillIcons: Record<string, JSX.Element> = {
  React: <SiReact />,
  "React Native": <SiReact />,
  "Next.js": <SiNextdotjs />,
  "Tailwind CSS": <SiTailwindcss />,
  TypeScript: <SiTypescript />,
  JavaScript: <FaJsSquare />,
  "Node.js": <SiNodedotjs />,
  Supabase: <SiSupabase />,
  Firebase: <SiFirebase />,
  Prisma: <SiPrisma />,
  Vercel: <SiVercel />,
  GitHub: <SiGithub />,
  "Docker (basic)": <SiDocker />,
  Postman: <SiPostman />,
  Figma: <SiFigma />,
  MongoDB: <SiMongodb />,
  PostgreSQL: <SiPostgresql />,
  Redis: <SiRedis />,
  Express: <SiExpress />,
  GraphQL: <SiGraphql />,
  Redux: <SiRedux />,
  Java: <FaJava />,
  Golang: <SiGoland />,
  Linux: <FaLinux />,
  Git: <FaGitAlt />,
  "Spring Boot": <SiSpringboot />,
  Gin: <SiGin />,
  "CI/CD": <SiGithubactions />,
  Jenkins: <SiJenkins />,
  AWS: <FaAws />,
};

export default function Skills() {
  const skills = {
    Languages: ["Java", "Golang", "JavaScript", "TypeScript"],
    Frontend: [
      "React",
      "React Native",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Redux",
      "GraphQL",
    ],
    Backend: [
      "Node.js",
      "Supabase",
      "Firebase",
      "Prisma",
      "Express",
      "GraphQL",
      "Spring Boot",
      "Gin",
    ],
    "Databases & API": ["MongoDB", "PostgreSQL", "Redis"],
    DevOps: ["Vercel", "GitHub", "CI/CD", "Docker (basic)", "AWS", "Jenkins"],
    Tools: ["Postman", "Figma", "Linux", "Git"],
  };

  return (
    <section
      id="skills"
      className="relative h-screen w-full overflow-y-auto scroll-smooth text-white pt-24 pb-16 px-6 flex flex-col items-center"
    >
      <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-gray-200 via-gray-400 to-gray-100 text-transparent bg-clip-text drop-shadow-lg">
        Skills & Tools
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
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
    </section>
  );
}
