const Navbar = () => {

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 py-3 px-6 bg-gray-300 backdrop:backdrop-blur-sm border-white/20 rounded-full shadow-md z-50 text-gray-600 " >
            <a href="#home" className="hover:text-gray-700 transition-colors transition-transform duration-300 ease-out hover:scale-[1.2] transform-gpu ">Home</a>
            <a href="#skills" className="hover:text-gray-700 transition-colors transition-transform duration-300 ease-out hover:scale-[1.2] transform-gpu">Skills</a>
            <a href="#projects" className="hover:text-gray-700 transition-colors transition-transform duration-300 ease-out hover:scale-[1.2] transform-gpu">Projects</a>
            <a href="#footer" className="hover:text-gray-700 transition-colors transition-transform duration-300 ease-out hover:scale-[1.2] transform-gpu">Contact</a>
        </div>
    );
}

export default Navbar;