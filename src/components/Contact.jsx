import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxtln62esUsg13MDm783umuWqqryaOJDtsfjgR9kWZ3kykyhIYpyp7cnW7KacVyJSTK/exec";

    const [formData, setFormData] = useState({
        name: '', email: '', service: 'Select a service...', message: ''
    });
    const [submissionStatus, setSubmissionStatus] = useState('idle');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmissionStatus('submitting');

        fetch(SCRIPT_URL, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(response => response.json())
            .then(data => {
                if (data.result === 'success') {
                    setSubmissionStatus('success');
                    setFormData({ name: '', email: '', service: 'Select a service...', message: '' });
                } else {
                    setSubmissionStatus('error');
                }
            })
            .catch(error => {
                console.error('Error!', error.message);
                setSubmissionStatus('error');
            });
    };

    return (
        <div className="bg-black text-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    <div data-aos="fade-right" className="flex flex-col justify-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">
                            Get in Touch
                        </h2>
                        <p className="text-lg text-zinc-400 mb-8 max-w-lg">
                            Have a question or need to book a service? Send us a message,
                            and our team will get back to you shortly.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4"><FaMapMarkerAlt size={20} className="text-cyan-400" /><span className="text-zinc-300">123 Auto Drive, Repairtown, ST 45678</span></div>
                            <div className="flex items-center gap-4"><FaPhone size={20} className="text-cyan-400" /><span className="text-zinc-300">(123) 456-7890</span></div>
                            <div className="flex items-center gap-4"><FaEnvelope size={20} className="text-cyan-400" /><span className="text-zinc-300">service@zoomauto.com</span></div>
                        </div>

                        <div className="mt-12">
                            <img src="/warranty-badge.png" alt="5 Years Workmanship Guarantee Badge" className="w-40 h-40 animate-spin-slow" />
                        </div>
                    </div>

                    <div data-aos="fade-left" className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800">
                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">Full Name</label>
                                <input type="text" id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required className="block w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">Email Address</label>
                                <input type="email" id="email" name="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required className="block w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-zinc-300 mb-2">Service Needed</label>
                                <select id="service" name="service" value={formData.service} onChange={handleChange} className="block w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                                    <option>Select a service...</option>
                                    <option>Engine Diagnostics</option>
                                    <option>Oil & Filter Change</option>
                                    <option>Brake Repair</option>
                                    <option>Tire Services</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">Message</label>
                                <textarea id="message" name="message" rows="4" placeholder="How can we help?" value={formData.message} onChange={handleChange} className="block w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"></textarea>
                            </div>

                            <div>
                                <button type="submit" disabled={submissionStatus === 'submitting'} className="w-full bg-cyan-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-cyan-600 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed">
                                    {submissionStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>

                            {submissionStatus === 'success' && (<p className="text-green-400 text-center">Message sent successfully!</p>)}
                            {submissionStatus === 'error' && (<p className="text-red-400 text-center">Something went wrong. Please try again.</p>)}

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;