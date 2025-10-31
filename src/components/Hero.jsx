const ArrowLeft = () => <span>&larr;</span>;
const ArrowRight = () => <span>&rarr;</span>;

const Hero = () => {

    return (
        <div className="relative h-screen w-full bg-black">

            <img
                src="/image.png"
                alt="Automobile factory with modern car"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

            <div className="relative z-20 h-full text-white" >

                <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex flex-col relative" data-aos="zoom-in">

                    <div  className="grow flex flex-col justify-center items-start pt-20 ">
                        <h1 className="text-5xl md:text-7xl font-bold mb-4 max-w-2xl text-cyan-500">
                            Drive Better With <span className="text-white"> Expert Car Repair.</span>
                        </h1>
                        <p className="text-lg md:text-xl mb-8 max-w-xl text-zinc-400">
                            From engine diagnostics to full-service fixes, we bring your car back to life.
                        </p>
                        <button
                            className="bg-cyan-600 text-gray-900 font-semibold py-3 px-6 rounded-lg 
                         hover:bg-cyan-400 transition-colors duration-300"
                        >
                            Book Your Repair
                        </button>
                    </div>

                    <div className="absolute bottom-8 right-6 lg:right-8 flex gap-4">
                        <button className="w-12 h-12 border border-white/50 rounded-full flex items-center justify-center
                               hover:bg-white/10 transition-colors duration-300">
                            <ArrowLeft />
                        </button>
                        <button className="w-12 h-12 border border-white/50 rounded-full flex items-center justify-center
                               hover:bg-white/10 transition-colors duration-300">
                            <ArrowRight />
                        </button>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Hero;