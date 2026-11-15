export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-16 py-28 max-w-7xl mx-auto border-t border-neutral-900">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">Featured Works</h2>

      <div className="space-y-12">
        {/* Spoon & Fork */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-neutral-950 border border-neutral-800/80 rounded-3xl p-8 md:p-12 hover:border-neutral-600 transition-all duration-300">
          <div>
            <span className="text-xs font-mono text-emerald-400 tracking-widest">FULL-STACK PLATFORM</span>
            <h3 className="text-3xl font-bold mt-2">Spoon &amp; Fork</h3>
            <p className="text-neutral-400 mt-4 leading-relaxed text-sm md:text-base">
              An advanced culinary ecosystem equipped with a custom security microservice. Features database role seeders, role-based access control (RBAC), OTP verification, OAuth OpenID 2.0, and dynamic role-specific page rendering.
            </p>
            <div className="flex gap-2 mt-6 flex-wrap">
              <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">React</span>
              <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">Node.js</span>
              <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">Express</span>
              <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">MongoDB</span>
              <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">OAuth / RBAC</span>
            </div>
          </div>
          {/* <div className="bg-neutral-900 h-72 rounded-2xl flex items-center justify-center border border-neutral-800 text-neutral-500 font-mono text-sm">
            [ Spoon &amp; Fork Preview / Dashboard ]
          </div> */}
          <div className="relative overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800 aspect-video group">
            {/* Project Screenshot */}
            <img
              src="public\preview.webp"
              alt="Spoon & Fork Dashboard Preview"
              className="w-full h-full object-cover object-top transform transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />

            {/* Optional subtle gradient overlay for glassmorphic depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-xs font-medium text-neutral-300 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                View Live App &rarr;
              </span>
            </div>
          </div>
        </div>

        {/* AI Resume Maker */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-neutral-950 border border-neutral-800/80 rounded-3xl p-8 md:p-12 hover:border-neutral-600 transition-all duration-300">
          <div>
            <span className="text-xs font-mono text-emerald-400 tracking-widest">AI WEB APP</span>
            <h3 className="text-3xl font-bold mt-2">AI Resume Generator</h3>
            <p className="text-neutral-400 mt-4 leading-relaxed text-sm md:text-base">
              Full-stack application that handles professional user data inputs, communicates with LLM APIs to optimize and polish content, and compiles custom downloadable PDF resumes.
            </p>
            <div className="flex gap-2 mt-6 flex-wrap">
              <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">React</span>
              <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">OpenAI API</span>
              <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">Node.js</span>
              <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">PDFKit</span>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800 aspect-video group">
            {/* Project Screenshot */}
            <img
              src="public\preview2.png"
              alt="Spoon & Fork Dashboard Preview"
              className="w-full h-full object-cover object-top transform transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />

            {/* Optional subtle gradient overlay for glassmorphic depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-xs font-medium text-neutral-300 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                View Live App &rarr;
              </span>
            </div>
          </div>
        </div>
      </div>
      <button className="flex justify-center bg-gray-400 rounded-2xl text-white px-4 p-2 mt-16 mx-auto hover:bg-gray-300 hover:text-gray-700 transform-gpu transition-transform duration-500 ease-out hover:scale-[1.2] capitalize">
        explore more
      </button>
    </section>
  );
}