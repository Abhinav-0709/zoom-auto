import { FaCarBattery, FaOilCan, FaTools, FaTired } from 'react-icons/fa';
import { GiAutoRepair, GiCarWheel } from 'react-icons/gi';


const services = [
    {
        icon: <GiAutoRepair size={40} className="text-cyan-500" />,
        title: 'Engine Diagnostics',
        description: 'Using state-of-the-art tech to find and fix issues with your engine.'
    },
    {
        icon: <FaOilCan size={40} className="text-cyan-500" />,
        title: 'Oil & Filter Change',
        description: 'Keep your engine running smoothly with regular oil and filter replacements.'
    },
    {
        icon: <FaTools size={40} className="text-cyan-500" />,
        title: 'Brake Repair & Service',
        description: 'Complete brake inspections, repairs, and fluid services for your safety.'
    },
    {
        icon: <FaTired size={40} className="text-cyan-500" />,
        title: 'Tire Services',
        description: 'Rotation, balancing, alignment, and new tire sales to keep you on the road.'
    },
    {
        icon: <FaCarBattery size={40} className="text-cyan-500" />,
        title: 'Battery Replacement',
        description: 'Testing, charging, and replacement of all types of car batteries.'
    },
    {
        icon: <GiCarWheel size={40} className="text-cyan-500" />,
        title: 'Suspension & Steering',
        description: 'Repairing shocks, struts, and steering components for a smooth ride.'
    }
];


const ServiceCard = ({ icon, title, description }) => (
    <div data-aos="fade-up"
        className="bg-zinc-900 p-6 rounded-2xl border border-cyan-800
                  flex flex-col items-start gap-4 cursor-pointer
                  hover:border-white/50 transition-colors duration-300">
        <div className="bg-zinc-800 p-4 rounded-full">
            {icon}
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-zinc-400">{description}</p>
    </div>
);


const Services = () => {
    return (
        <div className="bg-black text-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">


                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Our Expert Services
                    </h2>
                    <p className="text-lg text-zinc-400">
                        We offer a full range of services to keep your vehicle in peak condition.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Services;