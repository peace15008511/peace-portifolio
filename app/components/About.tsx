import Skills from "@/components/Skills";

export default function About() {
  return (
    <section
      id="about"
      className="h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-start px-6 pt-24 pb-10 overflow-y-auto"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-100 text-transparent bg-clip-text drop-shadow text-center">
        About Me
      </h2>

      <p className="max-w-2xl text-center text-base md:text-lg text-gray-300 mb-12 px-2">
        I'm a passionate full-stack developer based in South Africa. I enjoy
        turning ideas into scalable web apps, solving real-world problems, and
        crafting clean, maintainable code. I build things that work, look great,
        and scale.
      </p>

      <Skills />
    </section>
  );
}
