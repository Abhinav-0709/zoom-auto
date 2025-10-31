const InfoCard = ({ stat, title, children }) => (
    <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 flex flex-col">
        <h3 className="text-5xl lg:text-6xl font-bold mb-2">{stat}</h3>
        <h4 className="text-lg font-semibold mb-3 text-zinc-300">{title}</h4>
        <p className="text-zinc-400">{children}</p>
    </div>
);

const ImageCard = ({ src, alt, className = "" }) => (
    <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover rounded-2xl ${className}`}
    />
);

const About = () => {
    return (
        <div className="bg-black text-white py-16 md:py-24 transition-all duration-300 ">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 ">
                    About The Company
                </h2>

                <div data-aos="fade-in" className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 md:gap-8 md:h-[600px]">


                    <InfoCard 
                        title="20+ Years OF Trusted Service ">
                        Zoom Auto has been redefining car care by combining expert mechanics,
                        modern tools, and customer-first service.
                    </InfoCard>
                    <ImageCard
                        src="/image2.jpg"
                        alt="Mechanic working on engine"
                        className="md:row-span-2"
                    />


                    <ImageCard
                        src="/image1.jpg"
                        alt="Mechanics with clipboard"
                    />

                    <ImageCard
                        src="/image3.jpg"
                        alt="Mechanics working as a team"
                    />


                    <InfoCard title="98% Customer Satisfaction">
                        We're proud to maintain one of the highest rates in the industry,
                        backed by real feedback and repeat clients.
                    </InfoCard>

                </div>
            </div>
        </div>
    );
};

export default About;