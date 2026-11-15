// export default function SkillsBento() {
//   return (
//     <section id="skills" className="px-6 md:px-16 py-28 max-w-7xl mx-auto">
//       <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">Skills that fuel my stack</h2>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Frontend */}
//         <div className="bg-neutral-950 border border-neutral-800/80 rounded-3xl p-8 flex flex-col justify-between hover:border-neutral-600 transition-all duration-300 group">
//           <div>
//             <span className="text-xs font-mono text-emerald-400 tracking-widest">01 / FRONTEND</span>
//             <h3 className="text-2xl font-semibold mt-4">React &amp; UI Architecture</h3>
//             <p className="text-neutral-400 text-sm mt-3 leading-relaxed">Building responsive single-page applications, custom hooks, Context API, and polished Tailwind layouts.</p>
//           </div>
//           <div className="flex gap-2 mt-8 flex-wrap">
//             <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">React.js</span>
//             <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">Tailwind CSS</span>
//             <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">Vite</span>
//           </div>
//         </div>

//         {/* Backend */}
//         <div className="bg-neutral-950 border border-neutral-800/80 rounded-3xl p-8 flex flex-col justify-between hover:border-neutral-600 transition-all duration-300 group">
//           <div>
//             <span className="text-xs font-mono text-emerald-400 tracking-widest">02 / BACKEND</span>
//             <h3 className="text-2xl font-semibold mt-4">Node.js &amp; Express APIs</h3>
//             <p className="text-neutral-400 text-sm mt-3 leading-relaxed">Designing robust RESTful APIs, routing logic, server-side validation, and middleware architecture.</p>
//           </div>
//           <div className="flex gap-2 mt-8 flex-wrap">
//             <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">Node.js</span>
//             <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">Express.js</span>
//             <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">REST APIs</span>
//           </div>
//         </div>

//         {/* Security & DB (Your primary flex) */}
//         <div className="bg-neutral-950 border border-neutral-800/80 rounded-3xl p-8 flex flex-col justify-between hover:border-neutral-600 transition-all duration-300 group md:col-span-1">
//           <div>
//             <span className="text-xs font-mono text-emerald-400 tracking-widest">03 / SECURITY &amp; DB</span>
//             <h3 className="text-2xl font-semibold mt-4">Auth, RBAC &amp; MongoDB</h3>
//             <p className="text-neutral-400 text-sm mt-3 leading-relaxed">Enterprise-grade security implementations featuring custom RBAC, OTP verification, OAuth OpenID 2.0, and Mongoose schemas.</p>
//           </div>
//           <div className="flex gap-2 mt-8 flex-wrap">
//             <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">MongoDB</span>
//             <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">OAuth / RBAC</span>
//             <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">JWT / OTP</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function SkillsBento() {
  return (
    <section id="skills" className="px-6 md:px-16 py-28 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">Skills that fuel my stack</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* 01 / Frontend (1 col) */}
        <div className="bg-neutral-950 border border-neutral-800/80 rounded-3xl p-8 flex flex-col justify-between hover:border-neutral-600 transition-all duration-500 group md:col-span-1 hover:scale-105">
          <div>
            <span className="text-xs font-mono text-emerald-400 tracking-widest">01 / FRONTEND</span>
            <h3 className="text-2xl font-semibold mt-4">React &amp; UI Architecture</h3>
            <p className="text-neutral-400 text-sm mt-3 leading-relaxed">Building responsive single-page applications, custom hooks, and polished layouts using modern styling standards.</p>
          </div>
          <div className="flex gap-2 mt-8 flex-wrap">
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">React</span>
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">Tailwind CSS</span>
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">HTML5</span>
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">CSS3</span>
          </div>
        </div>

        {/* 02 / Backend (1 col) */}
        <div className="bg-neutral-950 border border-neutral-800/80 rounded-3xl p-8 flex flex-col justify-between hover:border-neutral-600 transition-all duration-500 group md:col-span-1 hover:scale-105">
          <div>
            <span className="text-xs font-mono text-emerald-400 tracking-widest">02 / BACKEND</span>
            <h3 className="text-2xl font-semibold mt-4">Node.js &amp; Express APIs</h3>
            <p className="text-neutral-400 text-sm mt-3 leading-relaxed">Designing robust RESTful APIs, routing logic, server-side validation, and middleware architecture.</p>
          </div>
          <div className="flex gap-2 mt-8 flex-wrap">
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">Node.js</span>
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">Express.js</span>
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">REST API</span>
          </div>
        </div>

        {/* 03 / Database (1 col) */}
        <div className="bg-neutral-950 border border-neutral-800/80 rounded-3xl p-8 flex flex-col justify-between hover:border-neutral-600 transition-all duration-500 group md:col-span-1 hover:scale-105">
          <div>
            <span className="text-xs font-mono text-emerald-400 tracking-widest">03 / DATABASE</span>
            <h3 className="text-2xl font-semibold mt-4">Database Management</h3>
            <p className="text-neutral-400 text-sm mt-3 leading-relaxed">Structuring and managing data storage across NoSQL document databases and relational systems.</p>
          </div>
          <div className="flex gap-2 mt-8 flex-wrap">
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">MongoDB Atlas</span>
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">MySQL</span>
          </div>
        </div>

        {/* 04 / Security & Auth (Spans 2 cols to fit all your auth tags comfortably) */}
        <div className="bg-neutral-950 border border-neutral-800/80 rounded-3xl p-8 flex flex-col justify-between hover:border-neutral-600 transition-all duration-500 group md:col-span-2 hover:scale-105">
          <div>
            <span className="text-xs font-mono text-emerald-400 tracking-widest">04 / SECURITY &amp; AUTH</span>
            <h3 className="text-2xl font-semibold mt-4">Zero-Trust Security &amp; Access Engineering</h3>
            <p className="text-neutral-400 text-sm mt-3 leading-relaxed">Architecting bulletproof security systems with multi-factor verification, token revocation tracking, and granular access controls.</p>
          </div>
          <div className="flex gap-2 mt-8 flex-wrap">
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">Authentication</span>
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">Authorisation</span>
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">Token Blacklisting</span>
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">OTP Verification</span>
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">OpenID 2.0</span>
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">RBAC</span>
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">Dynamic Role Seeding</span>
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">Rate Limiting</span>
          </div>
        </div>

        {/* 05 / Tools (1 col) */}
        <div className="bg-neutral-950 border border-neutral-800/80 rounded-3xl p-8 flex flex-col justify-between hover:border-neutral-600 transition-all duration-500 group md:col-span-1 hover:scale-105">
          <div>
            <span className="text-xs font-mono text-emerald-400 tracking-widest">05 / TOOLS</span>
            <h3 className="text-2xl font-semibold mt-4">Development Tools</h3>
            <p className="text-neutral-400 text-sm mt-3 leading-relaxed">Utilizing modern build tooling, IDE environments, and debugging clients for efficient workflows.</p>
          </div>
          <div className="flex gap-2 mt-8 flex-wrap">
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">Vite</span>
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">Visual Studio</span>
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">Postman</span>
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">IntelliJ</span>
          </div>
        </div>

        {/* 06 / Languages (Spans 2 cols for visual balance) */}
        <div className="bg-neutral-950 border border-neutral-800/80 rounded-3xl p-8 flex flex-col justify-between hover:border-neutral-600 transition-all duration-500 group md:col-span-2 hover:scale-105">
          <div>
            <span className="text-xs font-mono text-emerald-400 tracking-widest">06 / LANGUAGES</span>
            <h3 className="text-2xl font-semibold mt-4">Core Programming Languages</h3>
            <p className="text-neutral-400 text-sm mt-3 leading-relaxed">Leveraging computer science fundamentals, algorithm design, and core logic across multiple programming languages.</p>
          </div>
          <div className="flex gap-2 mt-8 flex-wrap">
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">Java</span>
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">JavaScript</span>
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">C++</span>
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">Python</span>
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">SQL</span>
          </div>
        </div>

        {/* 07 / AI Skill (Spans 1 col to balance out the row with Tools) */}
        <div className="bg-neutral-950 border border-neutral-800/80 rounded-3xl p-8 flex flex-col justify-between hover:border-neutral-600 transition-all duration-500 group md:col-span-1 hover:scale-105">
          <div>
            <span className="text-xs font-mono text-emerald-400 tracking-widest">07 / AI &amp; LLM</span>
            <h3 className="text-2xl font-semibold mt-4">Generative AI Integration</h3>
            <p className="text-neutral-400 text-sm mt-3 leading-relaxed">Integrating LLMs and generative AI capabilities to build intelligent application features.</p>
          </div>
          <div className="flex gap-2 mt-8 flex-wrap">
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">Generative AI</span>
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-full">LLM Integration</span>
          </div>
        </div>

      </div>
    </section>
  );
}