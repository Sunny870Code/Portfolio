export default function Hero() {
    return (
        <section className="relative h-[80vh] w-full px-6 md:px-16 py-8 mx-auto  overflow-hidden bg-gray-400">
            <nav className="relative  flex justify-between items-center max-w-7xl mx-auto w-full text-xs font-mono tracking-widest text-neutral-900">
                <span >Code By Kunal</span>
                <div className="flex gap-6">
                    <a href="#skills" className="hover:text-white transition-colors">SKILLS</a>
                    <a href="#projects" className="hover:text-white transition-colors">PROJECTS</a>
                </div>
            </nav>
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <h1 className="absolute text-[12vw] font-black text-gray-200 tracking-wider select-none z-20">
                    DEVELOPER
                </h1>

            </div>


            <div className="absolute inset-x-0 bottom-0 flex justify-center z-21 pointer-events-none ">
                <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-[2px] border-neutral-400  shadow-2xl grayscale contrast-125">
                    <img
                        src="/portfolio.png"
                        alt="Kunal Pawar"
                        className="w-full h-full object-cover object-top scale-135 md:scale-150 -translate-y-10"
                    />
                </div>

            </div>
        </section>
    );
}