import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.16),_transparent_22%)] pointer-events-none" />
      <RevealOnScroll>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-200 mb-6 backdrop-blur-sm shadow-sm">
            Software Developer · Cloud Automation · Quality Engineering
          </div>

          <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight tracking-tight text-white">
            Hi, I'm <span className="text-blue-300">Roland Bouwer</span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg leading-8 mb-8 max-w-3xl mx-auto">
            Johannesburg-based Software Developer and Quality Engineer with a strong focus on cloud automation, test engineering, and resilient delivery pipelines. I leverage over six years of experience in Azure/AWS, automation frameworks, and DevOps practices to deliver stable, production-ready solutions.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-transform duration-200 hover:-translate-y-0.5"
            >
              Explore Projects
            </a>
            <a
              href="https://github.com/RolandBouwer"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-blue-400/40 bg-white/5 px-7 py-3 text-sm font-semibold text-blue-200 transition duration-200 hover:bg-blue-500/10 hover:text-white"
            >
              View GitHub
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};