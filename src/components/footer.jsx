export default function footer() {

    return (
        // <footer className="flex flex-col md:flex-row gap-16 px-6 md:px-16 pb-28 max-w-7xl mx-auto ">
        //     <div>
        //         <h4>That's all for now.</h4>
        //         <h2 className="text-5xl">Got a Project in mind?<br />Let's talk </h2>

        //     </div>

        //     <div className=" grid grid-cols-2  border-t border-neutral-900 pt-16">
        //         <div className="flex flex-col items-start ">
        //             <h4>Email : </h4>
        //             <h3 className="text-gray-950 text-lg">Sunnypawar870@gmail.com</h3>
        //         </div>
        //         <div className="flex flex-col items-start ">
        //             <h4>Phone : </h4>
        //             <h3 className="text-gray-950 text-lg">8708226985</h3>
        //         </div>
        //     </div>
        // </footer>

        <footer className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 px-6 md:px-16 py-28 max-w-7xl mx-auto w-full border-t-2 ">
            {/* Left Section: Call to Action */}
            <div className="space-y-3">
                <h4 className="text-xs font-mono tracking-widest text-neutral-900 uppercase">That's all for now.</h4>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
                    Got a Project in mind?<br />Let's talk
                </h2>
            </div>

            {/* Right Section: Contact Details */}
            <div className="w-full md:w-auto grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 border-t md:border-t-0 border-neutral-800 pt-8 md:pt-0">
                <div className="flex flex-col items-start gap-1">
                    <span className="text-xs font-mono tracking-wider text-neutral-800 uppercase">Email :</span>
                    <a href="mailto:Sunnypawar870@gmail.com" className="text-neutral-900 transition-all duration-500 hover:scale-105 text-base md:text-lg ">
                        Sunnypawar870@gmail.com
                    </a>
                </div>
                <div className="flex flex-col items-start gap-1">
                    <span className="text-xs font-mono tracking-wider text-neutral-800 uppercase">Phone :</span>
                    <a href="tel:8708226985" className="text-neutral-900 transition-all duration-500 hover:scale-105 text-base md:text-lg ">
                        8708226985
                    </a>
                </div>
            </div>
        </footer>
    )

}