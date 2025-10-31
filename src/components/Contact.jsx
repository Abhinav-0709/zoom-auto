import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const FormInput = ({ id, label, type = 'text', placeholder }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-zinc-300 mb-2">
            {label}
        </label>
        <input
            type={type}
            id={id}
            name={id}
            placeholder={placeholder}
            className="block w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 
                 text-white placeholder-zinc-500 
                 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
        />
    </div>
);

const Contact = () => {
    return (
        <div className="bg-black text-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div  className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">


                    <div data-aos="fade-right" className="flex flex-col justify-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Get in Touch
                        </h2>
                        <p className="text-lg text-zinc-400 mb-8 max-w-lg">
                            Have a question or need to book a service? Send us a message,
                            and our team will get back to you shortly.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <FaMapMarkerAlt size={20} className="text-white/80" />
                                <span className="text-zinc-300">123 Auto Drive, Repairtown, ST 45678</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaPhone size={20} className="text-white/80" />
                                <span className="text-zinc-300">(123) 456-7890</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaEnvelope size={20} className="text-white/80" />
                                <span className="text-zinc-300">service@zoomauto.com</span>
                            </div>
                        </div>

                        <div className="cta-container">

                            <div className="open-to-work">
                                <div className="wheel-outer">
                                    <div className="wheel-inner">
                                        <div className="wheel-text">
                                            <svg viewBox="0 0 120 120">
                                                <path id="wheel" d="M 60,60 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                                                    fill="none" />
                                                <text>
                                                    <textPath href="#wheel" startOffset="0%">
                                                        5 YEARS WARRANTY GUARANTEED •
                                                    </textPath>
                                                </text>
                                            </svg>
                                        </div>
                                        <div className="star-center">★</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Column 2: Contact Form (Unchanged) */}
                    <div data-aos="fade-left" className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800">
                        <form action="#" method="POST" className="space-y-6">

                            <FormInput
                                id="full-name"
                                label="Full Name"
                                placeholder="John Doe"
                            />

                            <FormInput
                                id="email"
                                label="Email Address"
                                type="email"
                                placeholder="you@example.com"
                            />

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-zinc-300 mb-2">
                                    Service Needed
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    className="block w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 
                             text-white focus:outline-none focus:ring-2 
                             focus:ring-white/50 focus:border-transparent"
                                >
                                    <option>Select a service...</option>
                                    <option>Engine Diagnostics</option>
                                    <option>Oil & Filter Change</option>
                                    <option>Brake Repair</option>
                                    <option>Tire Services</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="How can we help?"
                                    className="block w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 
                             text-white placeholder-zinc-500 
                             focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                                ></textarea>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-white text-black font-semibold py-3 px-6 rounded-lg 
                             hover:bg-gray-200 transition-colors duration-300"
                                >
                                    Send Message
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;