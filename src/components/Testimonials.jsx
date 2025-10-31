// src/components/Testimonials.jsx

import { Star, Quote } from "lucide-react";

const Testimonials = () => {
    const testimonials = [
        {
            name: "John Mitchell",
            role: "Business Owner",
            rating: 5,
            text: "Exceptional service! They diagnosed and fixed my transmission issue faster than I expected. The team was professional, transparent about costs, and my car runs like new.",
        },
        {
            name: "Sarah Chen",
            role: "Teacher",
            rating: 5,
            text: "I've been bringing my family's vehicles here for 5 years. Always reliable, fair pricing, and they take time to explain everything. Highly recommend!",
        },
        {
            name: "Michael Rodriguez",
            role: "Engineer",
            rating: 5,
            text: "Best auto shop in town! They went above and beyond to ensure my car was road-trip ready. Great communication and quality work every time.",
        },
    ];

    return (
        <section id="testimonials" className="py-16 md:py-24 bg-black text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        What Our Customers Say
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        Don't just take our word for it - hear from our satisfied customers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={`${index * 100}`}
                            className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-lg 
                 hover:shadow-xl transition-all duration-300 hover:scale-105 
                 relative"
                        >
                            <Quote className="absolute top-6 right-6 text-white/20" size={40} />

                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="text-yellow-200 fill-yellow-400"
                                        size={20}
                                    />
                                ))}
                            </div>

                            <p className="text-zinc-400 mb-6 relative z-10">
                                "{testimonial.text}"
                            </p>

                            <div className="border-t border-zinc-800 pt-4">
                                <h4 className="font-semibold text-lg text-cyan-400">{testimonial.name}</h4>
                                <p className="text-zinc-400 text-sm">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;